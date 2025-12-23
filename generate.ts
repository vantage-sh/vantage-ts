import openapiGen, { astToString } from "openapi-typescript";
import { writeFileSync } from "fs";

interface PathParam {
    name: string;
    camelName: string;
}

interface EndpointInfo {
    path: string;
    originalPath: string;
    method: string;
    operationId: string;
    pathParams: PathParam[];
    hasQuery: boolean;
    hasBody: boolean;
    isBodyOptional: boolean;
    summary?: string;
    description?: string;
    deprecated?: boolean;
}

function toCamelCase(str: string): string {
    // Handle special cases like "oas_v3.json" -> "oasV3Json"
    return str
        .replace(/[._-]([a-z0-9])/gi, (_, letter) => letter.toUpperCase())
        .replace(/^([A-Z])/, (_, letter) => letter.toLowerCase());
}

function toPascalCase(str: string): string {
    const camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function extractPathParams(path: string): PathParam[] {
    const params: PathParam[] = [];
    const regex = /\{([^}]+)\}/g;
    let match;

    while ((match = regex.exec(path)) !== null) {
        params.push({
            name: match[1],
            camelName: toCamelCase(match[1]),
        });
    }

    return params;
}

function sanitizeIdentifier(str: string): string {
    // Remove or replace invalid characters for JS identifiers
    return str
        .replace(/\./g, "")
        .replace(/[^a-zA-Z0-9_$]/g, "_")
        .replace(/^(\d)/, "_$1");
}

function formatJsDoc(summary?: string, description?: string, deprecated?: boolean): string {
    const lines: string[] = [];
    
    if (summary || description || deprecated) {
        lines.push("/**");
        if (!description) {
            description = summary;
        }
        
        if (description) {
            // Split description into lines if it's multi-line
            const descLines = description.split("\n");
            descLines.forEach(line => {
                lines.push(` * ${line}`);
            });
        }
        
        if (deprecated) {
            lines.push(" * @deprecated");
        }
        
        lines.push(" */");
        return lines.join("\n") + "\n";
    }
    
    return "";
}

function getMethodNameFromOperationId(operationId: string, resource: string): string {
    // Convert operation ID to a method name
    // e.g., "getForecastedCosts" -> "getForecastedCosts"
    // e.g., "createCostExport" -> "createExport"

    let name = toCamelCase(operationId);

    // Remove resource name prefix if present
    const resourcePascal = toPascalCase(resource);

    if (name.startsWith("get" + resourcePascal)) {
        name = "get" + name.slice(3 + resourcePascal.length);
    } else if (name.startsWith("create" + resourcePascal)) {
        name = "create" + name.slice(6 + resourcePascal.length);
    } else if (name.startsWith("update" + resourcePascal)) {
        name = "update" + name.slice(6 + resourcePascal.length);
    } else if (name.startsWith("delete" + resourcePascal)) {
        name = "delete" + name.slice(6 + resourcePascal.length);
    }

    // Handle singular forms
    const singularResource = resource.endsWith("s") ? resource.slice(0, -1) : resource;
    const singularPascal = toPascalCase(singularResource);

    if (name.startsWith("get" + singularPascal) && name !== "get") {
        name = "get" + name.slice(3 + singularPascal.length);
    } else if (name.startsWith("create" + singularPascal) && name !== "create") {
        name = "create" + name.slice(6 + singularPascal.length);
    } else if (name.startsWith("update" + singularPascal) && name !== "update") {
        name = "update" + name.slice(6 + singularPascal.length);
    } else if (name.startsWith("delete" + singularPascal) && name !== "delete") {
        name = "delete" + name.slice(6 + singularPascal.length);
    }

    // If name is empty, use the original
    if (!name || name === "get" || name === "create" || name === "update" || name === "delete") {
        return toCamelCase(operationId);
    }

    return name;
}

function generateMethod(methodName: string, endpoint: EndpointInfo): string {
    let requestType: string;
    let responseType: string;

    const typeBaseName = toPascalCase(endpoint.operationId);
    requestType = `${typeBaseName}Request`;
    responseType = `${typeBaseName}Response`;

    // Build parameters
    const params: string[] = [];

    // Add path parameters
    for (const param of endpoint.pathParams) {
        params.push(`${param.camelName}: string`);
    }

    // Add body parameter if needed
    const needsBody = endpoint.hasBody || endpoint.hasQuery;

    if (needsBody) {
        const optional = endpoint.isBodyOptional && !endpoint.hasBody;
        params.push(`body${optional ? "?" : ""}: ${requestType}`);
    }

    // Build path template
    let pathTemplate = endpoint.originalPath;
    for (const param of endpoint.pathParams) {
        pathTemplate = pathTemplate.replace(`{${param.name}}`, `\${pathEncode(${param.camelName})}`);
    }

    // Generate JSDoc comment
    const jsDoc = formatJsDoc(endpoint.summary, endpoint.description, endpoint.deprecated);

    let output = jsDoc;
    output += `    ${methodName}(${params.join(", ")}): Promise<${responseType}> {\n`;
    output += `        return this.client.request(\n`;
    output += `            \`${pathTemplate}\`,\n`;
    output += `            "${endpoint.method}",\n`;

    if (needsBody) {
        output += `            body,\n`;
    } else {
        output += `            {},\n`;
    }

    output += `        );\n`;
    output += `    }\n\n`;

    return output;
}

async function main() {
    const schema = await fetch("https://api.vantage.sh/v2/oas_v3.json").then(
        (res) => {
            if (!res.ok) {
                throw new Error(
                    `Failed to fetch OpenAPI schema: ${res.status} ${res.statusText}`
                );
            }
            return res.json();
        }
    );

    const dts = await openapiGen(schema);
    writeFileSync("swaggerSchema.d.ts", astToString(dts), { encoding: "utf-8" });
    console.log("Generated swaggerSchema.d.ts");

    const paths = schema.paths as Record<string, any>;

    // Collect all endpoints
    const endpoints: EndpointInfo[] = [];

    for (const [path, methods] of Object.entries(paths)) {
        for (const [method, details] of Object.entries(methods as Record<string, any>)) {
            if (!["get", "post", "put", "delete", "patch"].includes(method)) continue;

            const operationId = details.operationId;
            const pathParams = extractPathParams(path);

            // Check for query params
            const hasQuery = details.parameters?.some((p: any) => p.in === "query") ?? false;

            // Check for request body
            const hasBody = !!details.requestBody;
            const isBodyOptional = !hasBody || !details.requestBody.required;

            endpoints.push({
                path: path.replace(/\{[^}]+\}/g, "${NoSlashString}"),
                originalPath: path,
                method: method.toUpperCase(),
                operationId,
                pathParams,
                hasQuery,
                hasBody,
                isBodyOptional,
                summary: details.summary,
                description: details.description,
                deprecated: details.deprecated,
            });
        }
    }

    // Generate output
    let output = `// Auto-generated Vantage API Client
// Do not edit this file directly

import {
    BaseClient,
    pathEncode,
    type NoSlashString,
    type RequestBodyForPathAndMethod,
    type ResponseBodyForPathAndMethod,
} from "./BaseClient";

`;

    // Generate type exports for each endpoint
    // Note: Template literal types with multiple ${string} segments don't work well in generic type parameters
    // For paths without parameters or with a single parameter at the end, we can generate proper types
    output += `// Request/Response types for each endpoint\n`;

    for (const endpoint of endpoints) {
        const typeBaseName = toPascalCase(endpoint.operationId);

        const typePath = endpoint.path.includes("${NoSlashString}")
            ? `\`${endpoint.path}\``
            : `"${endpoint.path}"`;
        
        // Only generate request type if there are body or query params
        const needsBody = endpoint.hasBody || endpoint.hasQuery;
        if (needsBody) {
            // Generate JSDoc for request type
            const requestDoc = formatJsDoc(
                endpoint.summary ? `Request type for ${endpoint.summary}` : undefined,
                endpoint.description,
                endpoint.deprecated
            );
            output += requestDoc;
            output += `export type ${typeBaseName}Request = RequestBodyForPathAndMethod<${typePath}, "${endpoint.method}">;\n`;
        }
        
        // Generate JSDoc for response type
        const responseDoc = formatJsDoc(
            endpoint.summary ? `Response type for ${endpoint.summary}` : undefined,
            undefined,
            endpoint.deprecated
        );
        output += responseDoc;
        output += `export type ${typeBaseName}Response = ResponseBodyForPathAndMethod<${typePath}, "${endpoint.method}">;\n`;
    }

    output += `\n`;

    // Group endpoints by their "resource" (first path segment)
    const resourceGroups = new Map<string, EndpointInfo[]>();

    for (const endpoint of endpoints) {
        const segments = endpoint.originalPath.split("/").filter(Boolean);
        const resource = segments[0];

        if (!resourceGroups.has(resource)) {
            resourceGroups.set(resource, []);
        }
        resourceGroups.get(resource)!.push(endpoint);
    }

    // Generate the client class
    output += `/** Vantage API Client with typed methods */\n`;
    output += `export class APIV2Client extends BaseClient {\n`;

    // Generate private fields for each resource
    for (const resource of resourceGroups.keys()) {
        const fieldName = sanitizeIdentifier(toCamelCase(resource));
        const className = toPascalCase(sanitizeIdentifier(resource)) + "Api";
        output += `    private _${fieldName}?: ${className};\n`;
    }

    output += `\n`;

    // Generate getters for each resource
    for (const resource of resourceGroups.keys()) {
        const fieldName = sanitizeIdentifier(toCamelCase(resource));
        const className = toPascalCase(sanitizeIdentifier(resource)) + "Api";

        output += `    get ${fieldName}(): ${className} {\n`;
        output += `        if (!this._${fieldName}) {\n`;
        output += `            this._${fieldName} = new ${className}(this);\n`;
        output += `        }\n`;
        output += `        return this._${fieldName};\n`;
        output += `    }\n\n`;
    }

    output += `}\n\n`;

    // Generate API classes for each resource
    for (const [resource, resourceEndpoints] of resourceGroups) {
        const className = toPascalCase(sanitizeIdentifier(resource)) + "Api";

        output += `class ${className} {\n`;
        output += `    constructor(private client: BaseClient) {}\n\n`;

        // Categorize endpoints
        const listEndpoint = resourceEndpoints.find(e => {
            const segments = e.originalPath.split("/").filter(Boolean);
            return segments.length === 1 && e.method === "GET" && e.hasQuery;
        });

        const createEndpoint = resourceEndpoints.find(e => {
            const segments = e.originalPath.split("/").filter(Boolean);
            return segments.length === 1 && e.method === "POST";
        });

        const getEndpoint = resourceEndpoints.find(e => {
            return e.method === "GET" && !e.hasQuery;
        });

        const updateEndpoint = resourceEndpoints.find(e => {
            const segments = e.originalPath.split("/").filter(Boolean);
            return segments.length === 2 && segments[1].startsWith("{") && (e.method === "PUT" || e.method === "PATCH");
        });

        const deleteEndpoint = resourceEndpoints.find(e => {
            const segments = e.originalPath.split("/").filter(Boolean);
            return segments.length === 2 && segments[1].startsWith("{") && e.method === "DELETE";
        });

        // Generate standard CRUD methods
        if (listEndpoint) {
            output += generateMethod("list", listEndpoint);
        }

        if (createEndpoint) {
            output += generateMethod("create", createEndpoint);
        }

        if (getEndpoint) {
            output += generateMethod("get", getEndpoint);
        }

        if (updateEndpoint) {
            output += generateMethod("update", updateEndpoint);
        }

        if (deleteEndpoint) {
            output += generateMethod("delete", deleteEndpoint);
        }

        // Handle nested endpoints and special endpoints
        const specialEndpoints = resourceEndpoints.filter(e => {
            const segments = e.originalPath.split("/").filter(Boolean);
            // Skip the standard CRUD endpoints we already handled
            if (segments.length === 1) return false;
            if (segments.length === 2 && segments[1].startsWith("{")) return false;
            return true;
        });

        // Group special endpoints by their sub-resource
        const subResourceMap = new Map<string, EndpointInfo[]>();

        for (const ep of specialEndpoints) {
            const segments = ep.originalPath.split("/").filter(Boolean);

            // Find the first non-param segment after the resource
            let subResource = "";
            let depth = 0;

            for (let i = 1; i < segments.length; i++) {
                if (!segments[i].startsWith("{")) {
                    if (depth === 0) {
                        subResource = segments[i];
                    } else {
                        subResource += "_" + segments[i];
                    }
                    depth++;
                }
            }

            if (subResource) {
                if (!subResourceMap.has(subResource)) {
                    subResourceMap.set(subResource, []);
                }
                subResourceMap.get(subResource)!.push(ep);
            }
        }

        // Generate methods for each sub-resource grouping
        for (const subEndpoints of subResourceMap.values()) {
            for (const ep of subEndpoints) {
                const methodName = getMethodNameFromOperationId(ep.operationId, resource);
                output += generateMethod(methodName, ep);
            }
        }

        output += `}\n\n`;
    }

    writeFileSync("clientAutogen.ts", output, { encoding: "utf-8" });
    console.log("Generated clientAutogen.ts");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
