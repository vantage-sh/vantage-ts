/** The deliberately small OpenAPI 3.0 subset used by the Vantage API. No compiler API is needed. */
type ObjectValue = Record<string, any>;

export interface UnsupportedOpenAPIFeatureIssue {
  feature: string;
  pointer: string;
  snippet: string;
  howToFix: string;
}

export class UnsupportedOpenAPIFeatureError extends Error {
  readonly issues: readonly UnsupportedOpenAPIFeatureIssue[];

  constructor(issues: UnsupportedOpenAPIFeatureIssue[]) {
    super(
      [
        `the in-house OpenAPI → TypeScript generator (generator/schemaTypes.ts) hit ${issues.length} unsupported construct(s) in the Vantage OpenAPI spec.`,
        "This generator only implements the subset of OpenAPI used by the Vantage spec; it must be extended rather than worked around.",
        "",
        ...issues.flatMap((issue, index) => [
          `[${index + 1}] ${issue.feature} at ${issue.pointer}`,
          `    snippet: ${issue.snippet}`,
          `    how to fix: ${issue.howToFix}`,
          "",
        ]),
        "To fix: paste this entire error into a coding agent along with generator/schemaTypes.ts and generator/schemaTypes.test.ts.",
      ].join("\n")
    );
    this.name = "UnsupportedOpenAPIFeatureError";
    this.issues = issues;
  }
}

const METHODS = ["get", "put", "post", "delete", "options", "head", "patch", "trace"] as const;
const LOCATIONS = ["query", "header", "path", "cookie"] as const;
const METADATA = ["title", "description", "example", "default", "format", "deprecated", "nullable"];
const SCHEMA_KEYS = [
  ...METADATA,
  "$ref",
  "type",
  "properties",
  "required",
  "items",
  "enum",
  "oneOf",
  "additionalProperties",
  "readOnly",
  "writeOnly",
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  "minLength",
  "maxLength",
  "pattern",
  "minItems",
  "maxItems",
  "uniqueItems",
  "minProperties",
  "maxProperties",
];
const GROUPING_PATTERNS: Record<string, string> = {
  "^tag:(?=[\\s\\S]*\\S)[\\s\\S]+$": "tag",
  "^label:(?=[\\s\\S]*\\S)(?![\\s\\S]*(?:['\"`\\\\;]|--|[\\x00-\\x1F]))[\\s\\S]+$": "label",
};
const isObject = (value: unknown): value is ObjectValue =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const pointer = (parent: string, key: string | number) =>
  `${parent}/${String(key).replace(/~/g, "~0").replace(/\//g, "~1")}`;
const entries = (value: ObjectValue | undefined): [string, any][] => Object.entries(value ?? {});
// biome-ignore lint/suspicious/noPrototypeBuiltins: The project uses TypeScript libraries older than Object.hasOwn.
const own = (value: ObjectValue, key: string) => Object.prototype.hasOwnProperty.call(value, key);
const stringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

/** Only these exact enum/pattern pairs carry the branded grouping semantics of the old transform hook. */
function grouping(schema: ObjectValue): { values: string[]; prefix: string } | undefined {
  const variants = schema.oneOf;
  if (schema.type !== "string" || !Array.isArray(variants) || variants.length !== 2) return;
  const fixed = variants.find((variant) => isObject(variant) && own(variant, "enum"));
  const dynamic = variants.find((variant) => isObject(variant) && own(variant, "pattern"));
  if (!fixed || !dynamic || fixed === dynamic || fixed.type !== "string" || dynamic.type !== "string") return;
  if (
    !stringArray(fixed.enum) ||
    !fixed.enum.length ||
    typeof dynamic.pattern !== "string" ||
    !own(GROUPING_PATTERNS, dynamic.pattern)
  )
    return;
  const semanticKeys = (value: ObjectValue) =>
    Object.keys(value).filter((key) => !METADATA.includes(key) && !key.startsWith("x-"));
  if (semanticKeys(fixed).some((key) => key !== "type" && key !== "enum")) return;
  if (semanticKeys(dynamic).some((key) => key !== "type" && key !== "pattern")) return;
  if (fixed.nullable || dynamic.nullable) return;
  if (semanticKeys(schema).some((key) => key !== "type" && key !== "oneOf")) return;
  return { values: fixed.enum, prefix: GROUPING_PATTERNS[dynamic.pattern] };
}

/** Validate independently of rendering: every branch is visited even after an unsupported feature. */
class Validator {
  issues: UnsupportedOpenAPIFeatureIssue[] = [];
  operationIds = new Set<string>();
  constructor(private readonly spec: unknown) {}

  issue(feature: string, path: string, value: unknown) {
    const serialized = JSON.stringify(value) ?? String(value);
    const hint =
      feature === "allOf" ? " (emit an intersection `A & B`)" : feature === "anyOf" ? " (emit a union `A | B`)" : "";
    this.issues.push({
      feature,
      pointer: path,
      snippet: serialized.length > 300 ? `${serialized.slice(0, 297)}...` : serialized,
      howToFix: `add support for ${JSON.stringify(feature)} in generator/schemaTypes.ts${hint}, add a fixture test in generator/schemaTypes.test.ts, then re-run npm run generate.`,
    });
  }

  object(value: unknown, path: string, keys?: readonly string[]): ObjectValue | undefined {
    if (!isObject(value)) {
      this.issue("expected an object", path, value);
      return;
    }
    if (keys)
      for (const key of Object.keys(value)) {
        // Vendor extensions are opaque metadata, except x-nullable which is explicitly implemented below.
        if (!keys.includes(key) && !key.startsWith("x-")) this.issue(key, path, value);
      }
    if (keys)
      for (const key of [
        "title",
        "summary",
        "description",
        "format",
        "name",
        "url",
        "email",
        "version",
        "termsOfService",
        "authorizationUrl",
        "tokenUrl",
        "refreshUrl",
      ])
        if (keys.includes(key) && own(value, key) && typeof value[key] !== "string")
          this.issue(`${key} must be a string`, path, value);
    if (keys)
      for (const key of [
        "nullable",
        "x-nullable",
        "deprecated",
        "readOnly",
        "writeOnly",
        "required",
        "explode",
        "allowEmptyValue",
        "allowReserved",
      ])
        if (own(value, key) && key !== "required" && typeof value[key] !== "boolean")
          this.issue(`${key} must be boolean`, path, value);
    return value;
  }

  map(value: unknown, path: string, visit: (value: unknown, path: string, name: string) => void) {
    const object = this.object(value, path);
    if (object) for (const [name, child] of entries(object)) visit(child, pointer(path, name), name);
  }

  array(value: unknown, path: string, visit: (value: unknown, path: string) => void) {
    if (!Array.isArray(value)) this.issue("expected an array", path, value);
    else
      value.forEach((child, index) => {
        visit(child, pointer(path, index));
      });
  }

  schema(value: unknown, path: string, groupingItem = false) {
    const schema = this.object(value, path, SCHEMA_KEYS);
    if (!schema) return;
    if (own(schema, "$ref")) {
      const ref = schema.$ref;
      if (typeof ref !== "string" || !/^#\/components\/schemas\/([^/~]|~[01])+$/.test(ref)) {
        this.issue("$ref (only internal #/components/schemas references are supported)", path, schema);
      } else {
        const name = ref.slice("#/components/schemas/".length).replace(/~1/g, "/").replace(/~0/g, "~");
        if (
          !isObject(this.spec) ||
          !isObject(this.spec.components?.schemas) ||
          !own(this.spec.components.schemas, name)
        )
          this.issue("unresolved $ref", path, schema);
      }
      for (const key of Object.keys(schema))
        if (key !== "$ref" && !METADATA.includes(key) && !key.startsWith("x-"))
          this.issue(`$ref sibling ${key}`, path, schema);
    }
    if (own(schema, "type") && !["string", "number", "integer", "boolean", "object", "array"].includes(schema.type))
      this.issue("type (expected an OpenAPI 3.0 scalar type)", path, schema);
    if (
      !own(schema, "$ref") &&
      !own(schema, "type") &&
      !own(schema, "properties") &&
      !own(schema, "additionalProperties") &&
      !own(schema, "enum") &&
      !["allOf", "anyOf", "not", "oneOf"].some((key) => own(schema, key))
    )
      this.issue("schema without a supported type", path, schema);
    if (
      own(schema, "enum") &&
      (!stringArray(schema.enum) ||
        !schema.enum.length ||
        (schema.type !== undefined && schema.type !== "string") ||
        own(schema, "properties") ||
        own(schema, "additionalProperties"))
    )
      this.issue("enum (only nonempty string enums are supported)", path, schema);
    if (
      !own(schema, "$ref") &&
      !own(schema, "type") &&
      !own(schema, "enum") &&
      (own(schema, "properties") || own(schema, "additionalProperties")) &&
      !Object.keys(isObject(schema.properties) ? schema.properties : {}).length &&
      !(schema.additionalProperties === true || isObject(schema.additionalProperties))
    )
      this.issue("untyped empty object schema", path, schema);
    if (own(schema, "required") && !stringArray(schema.required))
      this.issue("required (expected property names)", path, schema);
    if (schema.type === "array" && !own(schema, "items")) this.issue("array without items", path, schema);
    if (own(schema, "items")) {
      if (schema.type !== "array") this.issue("items on a non-array schema", path, schema);
      this.schema(schema.items, pointer(path, "items"), true);
    }
    if (own(schema, "properties")) {
      if (schema.type !== undefined && schema.type !== "object")
        this.issue("properties on a non-object schema", path, schema);
      this.map(schema.properties, pointer(path, "properties"), (child, childPath) => this.schema(child, childPath));
    }
    if (own(schema, "additionalProperties")) {
      if (schema.type !== undefined && schema.type !== "object")
        this.issue("additionalProperties on a non-object schema", path, schema);
      if (typeof schema.additionalProperties !== "boolean") {
        // An explicit empty additionalProperties object means unrestricted values, as does true.
        if (!isObject(schema.additionalProperties) || Object.keys(schema.additionalProperties).length)
          this.schema(schema.additionalProperties, pointer(path, "additionalProperties"));
      }
    }
    if (own(schema, "oneOf")) {
      if (!groupingItem || !grouping(schema))
        this.issue("oneOf (only grouping enum/pattern array items are supported)", path, schema);
      this.array(schema.oneOf, pointer(path, "oneOf"), (child, childPath) => this.schema(child, childPath));
    }
    // Visit children of unsupported compositions too, to collect all schema issues in the document.
    for (const key of ["allOf", "anyOf", "prefixItems"])
      if (Array.isArray(schema[key]))
        schema[key].forEach((child: unknown, index: number) => {
          this.schema(child, pointer(pointer(path, key), index));
        });
    if (own(schema, "not")) this.schema(schema.not, pointer(path, "not"));
    for (const key of [
      "minimum",
      "maximum",
      "multipleOf",
      "minLength",
      "maxLength",
      "minItems",
      "maxItems",
      "minProperties",
      "maxProperties",
    ])
      if (own(schema, key) && (typeof schema[key] !== "number" || !Number.isFinite(schema[key])))
        this.issue(`${key} must be numeric`, path, schema);
    for (const key of ["exclusiveMinimum", "exclusiveMaximum", "uniqueItems"])
      if (own(schema, key) && typeof schema[key] !== "boolean") this.issue(`${key} must be boolean`, path, schema);
    if (own(schema, "pattern") && typeof schema.pattern !== "string")
      this.issue("pattern must be a string", path, schema);
  }

  parameter(value: unknown, path: string) {
    const parameter = this.object(value, path, [
      "name",
      "in",
      "description",
      "required",
      "deprecated",
      "allowEmptyValue",
      "style",
      "explode",
      "allowReserved",
      "schema",
      "example",
    ]);
    if (!parameter) return;
    if (!["path", "query"].includes(parameter.in))
      this.issue(`${parameter.in ?? "missing"} parameter location`, path, parameter);
    if (typeof parameter.name !== "string" || !parameter.name) this.issue("parameter name", path, parameter);
    if (own(parameter, "required") && typeof parameter.required !== "boolean")
      this.issue("parameter required must be boolean", path, parameter);
    if (
      own(parameter, "style") &&
      !["form", "simple", "spaceDelimited", "pipeDelimited", "deepObject"].includes(parameter.style)
    )
      this.issue("parameter style", path, parameter);
    this.schema(parameter.schema, pointer(path, "schema"));
  }

  content(value: unknown, path: string, response: boolean) {
    this.map(value, path, (child, childPath, type) => {
      const supported = response
        ? ["application/json"]
        : ["application/json", "multipart/form-data", "application/x-www-form-urlencoded"];
      if (!supported.includes(type)) this.issue(`content type ${type}`, childPath, child);
      const media = this.object(child, childPath, ["schema", "example"]);
      if (media) this.schema(media.schema, pointer(childPath, "schema"));
    });
  }

  requestBody(value: unknown, path: string) {
    const body = this.object(value, path, ["description", "required", "content"]);
    if (!body) return;
    if (own(body, "required") && typeof body.required !== "boolean")
      this.issue("requestBody required must be boolean", path, body);
    this.content(body.content, pointer(path, "content"), false);
  }

  response(value: unknown, path: string) {
    const response = this.object(value, path, ["description", "content"]);
    if (!response) return;
    if (typeof response.description !== "string") this.issue("response description", path, response);
    if (own(response, "content")) this.content(response.content, pointer(path, "content"), true);
  }

  security(value: unknown, path: string) {
    this.array(value, path, (child, childPath) =>
      this.map(child, childPath, (scopes, scopesPath, name) => {
        if (!stringArray(scopes)) this.issue("security scopes", scopesPath, scopes);
        if (!isObject(this.spec) || !own(this.spec.components?.securitySchemes ?? {}, name))
          this.issue("unknown security scheme", scopesPath, child);
      })
    );
  }

  operation(value: unknown, path: string) {
    const operation = this.object(value, path, [
      "tags",
      "summary",
      "description",
      "operationId",
      "parameters",
      "requestBody",
      "responses",
      "deprecated",
      "security",
      "servers",
      "externalDocs",
    ]);
    if (!operation) return;
    if (typeof operation.operationId !== "string" || !operation.operationId)
      this.issue("missing operationId", path, operation);
    else if (this.operationIds.has(operation.operationId)) this.issue("duplicate operationId", path, operation);
    else this.operationIds.add(operation.operationId);
    if (own(operation, "tags") && !stringArray(operation.tags)) this.issue("operation tags", path, operation);
    if (own(operation, "parameters"))
      this.array(operation.parameters, pointer(path, "parameters"), (child, childPath) =>
        this.parameter(child, childPath)
      );
    if (own(operation, "requestBody")) this.requestBody(operation.requestBody, pointer(path, "requestBody"));
    this.map(operation.responses, pointer(path, "responses"), (child, childPath, status) => {
      if (!/^(default|[1-5][0-9X]{2})$/.test(status)) this.issue(`response status ${status}`, childPath, child);
      this.response(child, childPath);
    });
    if (own(operation, "security")) this.security(operation.security, pointer(path, "security"));
    if (own(operation, "servers")) this.servers(operation.servers, pointer(path, "servers"));
    if (own(operation, "externalDocs")) this.externalDocs(operation.externalDocs, pointer(path, "externalDocs"));
  }

  pathItem(value: unknown, path: string) {
    const item = this.object(value, path, [...METHODS, "summary", "description", "parameters", "servers"]);
    if (!item) return;
    if (own(item, "parameters"))
      this.array(item.parameters, pointer(path, "parameters"), (child, childPath) => this.parameter(child, childPath));
    if (own(item, "servers")) this.servers(item.servers, pointer(path, "servers"));
    for (const method of METHODS) if (own(item, method)) this.operation(item[method], pointer(path, method));
  }

  externalDocs(value: unknown, path: string) {
    const docs = this.object(value, path, ["description", "url"]);
    if (docs && typeof docs.url !== "string") this.issue("externalDocs URL", path, docs);
  }

  servers(value: unknown, path: string) {
    this.array(value, path, (child, childPath) => {
      const server = this.object(child, childPath, ["url", "description", "variables"]);
      if (!server) return;
      if (typeof server.url !== "string") this.issue("server URL", childPath, server);
      if (own(server, "variables"))
        this.map(server.variables, pointer(childPath, "variables"), (variable, variablePath) => {
          const object = this.object(variable, variablePath, ["enum", "default", "description"]);
          if (object && (typeof object.default !== "string" || (own(object, "enum") && !stringArray(object.enum))))
            this.issue("server variable", variablePath, object);
        });
    });
  }

  validate() {
    const spec = this.object(this.spec, "#", [
      "openapi",
      "info",
      "servers",
      "security",
      "tags",
      "paths",
      "components",
      "externalDocs",
    ]);
    if (!spec) return;
    if (typeof spec.openapi !== "string" || !/^3\.0\.\d+$/.test(spec.openapi))
      this.issue("OpenAPI version (only 3.0.x is supported)", "#", spec);
    const info = this.object(spec.info, "#/info", [
      "title",
      "description",
      "termsOfService",
      "contact",
      "license",
      "version",
    ]);
    if (info) {
      for (const key of ["title", "version"])
        if (typeof info[key] !== "string") this.issue(`info ${key}`, "#/info", info);
      if (own(info, "contact")) this.object(info.contact, "#/info/contact", ["name", "url", "email"]);
      if (own(info, "license")) this.object(info.license, "#/info/license", ["name", "url"]);
    }
    if (own(spec, "servers")) this.servers(spec.servers, "#/servers");
    if (own(spec, "security")) this.security(spec.security, "#/security");
    if (own(spec, "tags"))
      this.array(spec.tags, "#/tags", (child, childPath) => {
        const tag = this.object(child, childPath, ["name", "description", "externalDocs"]);
        if (tag && typeof tag.name !== "string") this.issue("tag name", childPath, tag);
        if (tag && own(tag, "externalDocs")) this.externalDocs(tag.externalDocs, pointer(childPath, "externalDocs"));
      });
    if (own(spec, "externalDocs")) this.externalDocs(spec.externalDocs, "#/externalDocs");
    this.map(spec.paths, "#/paths", (child, childPath, name) => {
      if (name.startsWith("x-")) return;
      if (!name.startsWith("/")) this.issue("path must begin with /", childPath, child);
      this.pathItem(child, childPath);
    });
    if (own(spec, "components")) {
      const components = this.object(spec.components, "#/components", [
        "schemas",
        "responses",
        "parameters",
        "requestBodies",
        "headers",
        "pathItems",
        "securitySchemes",
      ]);
      if (components)
        for (const [section, values] of entries(components)) {
          if (section.startsWith("x-")) continue;
          if (section === "schemas")
            this.map(values, "#/components/schemas", (child, childPath) => this.schema(child, childPath));
          else if (section === "responses")
            this.map(values, "#/components/responses", (child, childPath) => this.response(child, childPath));
          else if (section === "parameters")
            this.map(values, "#/components/parameters", (child, childPath) => this.parameter(child, childPath));
          else if (section === "requestBodies")
            this.map(values, "#/components/requestBodies", (child, childPath) => this.requestBody(child, childPath));
          else if (section === "pathItems")
            this.map(values, "#/components/pathItems", (child, childPath) => this.pathItem(child, childPath));
          else if (section === "headers")
            this.map(values, "#/components/headers", (child, childPath) =>
              this.issue("component header", childPath, child)
            );
          else if (section === "securitySchemes")
            this.map(values, "#/components/securitySchemes", (child, childPath) =>
              this.securityScheme(child, childPath)
            );
        }
    }
  }

  securityScheme(value: unknown, path: string) {
    const scheme = this.object(value, path, ["type", "description", "flows"]);
    if (!scheme) return;
    if (scheme.type !== "oauth2") this.issue("security scheme type", path, scheme);
    this.map(scheme.flows, pointer(path, "flows"), (child, childPath, name) => {
      if (!["implicit", "password", "clientCredentials", "authorizationCode"].includes(name))
        this.issue("OAuth flow", childPath, child);
      const flow = this.object(child, childPath, ["authorizationUrl", "tokenUrl", "refreshUrl", "scopes"]);
      if (flow)
        this.map(flow.scopes, pointer(childPath, "scopes"), (scope, scopePath) => {
          if (typeof scope !== "string") this.issue("OAuth scope description", scopePath, scope);
        });
    });
  }
}

const quote = (value: string): string =>
  JSON.stringify(value)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
const key = (name: string): string =>
  /^[A-Za-z_$][\w$]*$/.test(name) || /^(0|[1-9][0-9]*)$/.test(name) ? name : quote(name);
const indent = (depth: number): string => "    ".repeat(depth);

function jsdoc(value: ObjectValue, depth: number): string {
  const lines: string[] = [];
  const text = (value: unknown) =>
    String(typeof value === "object" ? JSON.stringify(value, null, 2) : value)
      .trim()
      .replace(/\r?\n/g, "\n *     ");
  for (const name of ["title", "summary"]) if (value[name]) lines.push(text(value[name]));
  if (value.format) lines.push(`Format: ${value.format}`);
  if (value.deprecated) lines.push("@deprecated");
  for (const name of ["description", "default", "example"])
    if (value[name] !== undefined && (name !== "description" || value[name] !== ""))
      lines.push(`@${name} ${text(value[name])}`);
  if (value.enum) lines.push(`@enum {${value.type ?? "unknown"}${value.nullable ? "|null" : ""}}`);
  if (!lines.length) return "";
  const escaped = lines.map((line) => line.replace(/\*\//g, "*\\/"));
  const content =
    escaped.length === 1 && !escaped[0].includes("\n")
      ? `/** ${escaped[0]} */`
      : `/**\n * ${escaped.join("\n * ")}\n */`;
  return `${content
    .split("\n")
    .map((line) => indent(depth) + line)
    .join("\n")}\n`;
}

function field(
  name: string,
  type: string,
  depth: number,
  optional = false,
  metadata: ObjectValue = {},
  readonly = false
): string {
  return `${jsdoc(metadata, depth)}${indent(depth)}${readonly ? "readonly " : ""}${key(name)}${optional ? "?" : ""}: ${type};\n`;
}
function object(fields: string[], depth: number): string {
  return `{\n${fields.join("")}${indent(depth)}}`;
}

function schemaType(schema: ObjectValue, depth: number, property = false): string {
  let type: string;
  if (schema.$ref) {
    const name = schema.$ref.slice("#/components/schemas/".length).replace(/~1/g, "/").replace(/~0/g, "~");
    // Reference siblings are ignored in OpenAPI 3.0, as they were by openapi-typescript.
    type = `components["schemas"][${quote(name)}]`;
  } else {
    if (schema.enum) type = [...new Set<string>(schema.enum.map(quote))].join(" | ");
    else if (schema.type === "string") type = "string";
    else if (schema.type === "integer" || schema.type === "number") type = "number";
    else if (schema.type === "boolean") type = "boolean";
    else if (schema.type === "array") {
      const group = grouping(schema.items);
      const item = group
        ? [...group.values.map(quote), `\`${group.prefix}:\${NonEmptyString}\``].join(" | ")
        : schemaType(schema.items, depth);
      type = `(${item})[]`;
    } else {
      const properties = entries(schema.properties).map(([name, child]) =>
        field(
          name,
          schemaType(child, depth + 1, true),
          depth + 1,
          !(schema.required ?? []).includes(name) || child.default !== undefined,
          child,
          !!child.readOnly
        )
      );
      const additional = schema.additionalProperties;
      let indexType: string | undefined;
      if (additional === true || (isObject(additional) && !Object.keys(additional).length)) indexType = "unknown";
      else if (isObject(additional)) indexType = schemaType(additional, depth + 1);
      const index =
        indexType === undefined ? undefined : object([`${indent(depth + 1)}[key: string]: ${indexType};\n`], depth);
      type = properties.length ? object(properties, depth) : (index ?? "Record<string, any>");
      if (properties.length && index) type = `(${type} & ${index})`;
    }
    if (schema.nullable) type += " | null";
  }
  if (property && schema["x-nullable"] === true) type += " | null";
  return type;
}

function parametersType(parameters: ObjectValue[], depth: number): string {
  return object(
    LOCATIONS.map((location) => {
      const selected = parameters.filter((parameter) => parameter.in === location);
      return field(
        location,
        selected.length
          ? object(
              selected.map((parameter) =>
                field(
                  parameter.name,
                  schemaType(parameter.schema, depth + 2),
                  depth + 2,
                  location !== "path" && !parameter.required,
                  parameter
                )
              ),
              depth + 1
            )
          : "never",
        depth + 1,
        selected.every((parameter) => location !== "path" && !parameter.required)
      );
    }),
    depth
  );
}

function contentType(content: ObjectValue, depth: number): string {
  return object(
    entries(content).map(([name, media]) => field(name, schemaType(media.schema, depth + 1), depth + 1, false, media)),
    depth
  );
}
function requestBodyType(body: ObjectValue, depth: number): string {
  const content = entries(body.content).length
    ? contentType(body.content, depth + 1)
    : object([field("*/*", "never", depth + 2, true)], depth + 1);
  return object([field("content", content, depth + 1)], depth);
}
function responseType(response: ObjectValue, depth: number): string {
  const hasContent = entries(response.content).length > 0;
  return object(
    [
      field("headers", object([`${indent(depth + 2)}[name: string]: unknown;\n`], depth + 1), depth + 1),
      field("content", hasContent ? contentType(response.content, depth + 1) : "never", depth + 1, !hasContent),
    ],
    depth
  );
}
function operationType(operation: ObjectValue, inherited: ObjectValue[], depth: number): string {
  const parameters = [...inherited];
  for (const parameter of operation.parameters ?? []) {
    const index = parameters.findIndex(
      (candidate) => candidate.in === parameter.in && candidate.name === parameter.name
    );
    if (index < 0) parameters.push(parameter);
    else parameters[index] = parameter;
  }
  return object(
    [
      field("parameters", parametersType(parameters, depth + 1), depth + 1),
      field(
        "requestBody",
        operation.requestBody ? requestBodyType(operation.requestBody, depth + 1) : "never",
        depth + 1,
        !operation.requestBody?.required,
        operation.requestBody ?? {}
      ),
      field(
        "responses",
        object(
          entries(operation.responses).map(([status, response]) =>
            field(status, responseType(response, depth + 2), depth + 2, false, response)
          ),
          depth + 1
        ),
        depth + 1
      ),
    ],
    depth
  );
}

/** Generate a complete declaration file, or throw one error containing every unsupported construct. */
export function generateSchemaTypes(spec: unknown): string {
  const validator = new Validator(spec);
  validator.validate();
  if (validator.issues.length) throw new UnsupportedOpenAPIFeatureError(validator.issues);
  const document = spec as ObjectValue;
  const operations: string[] = [];
  const pathType = (item: ObjectValue, depth: number): string =>
    object(
      [
        field("parameters", parametersType(item.parameters ?? [], depth + 1), depth + 1),
        ...METHODS.map((method) => {
          const operation = item[method];
          if (operation)
            operations.push(field(operation.operationId, operationType(operation, item.parameters ?? [], 1), 1));
          return field(
            method,
            operation ? `operations[${quote(operation.operationId)}]` : "never",
            depth + 1,
            !operation,
            operation ?? {}
          );
        }),
      ],
      depth
    );
  const paths = entries(document.paths)
    .filter(([name]) => !name.startsWith("x-"))
    .map(([name, item]) => field(name, pathType(item, 1), 1, false, item));
  const sections = ["schemas", "responses", "parameters", "requestBodies", "headers", "pathItems"].map((section) => {
    const render = (value: ObjectValue): string => {
      if (section === "schemas") return schemaType(value, 2);
      if (section === "responses") return responseType(value, 2);
      if (section === "parameters") return schemaType(value.schema, 2);
      if (section === "requestBodies") return requestBodyType(value, 2);
      return pathType(value, 2);
    };
    const values = entries(document.components?.[section]);
    return field(
      section,
      values.length
        ? object(
            values.map(([name, value]) => field(name, render(value), 2, false, value)),
            1
          )
        : "never",
      1
    );
  });
  return [
    'import type { NonEmptyString } from "./stringTypes";',
    "",
    paths.length ? `export interface paths ${object(paths, 0)}` : "export type paths = Record<string, any>;",
    "export type webhooks = Record<string, any>;",
    document.components
      ? `export interface components ${object(sections, 0)}`
      : "export type components = Record<string, any>;",
    "export type $defs = Record<string, any>;",
    operations.length
      ? `export interface operations ${object(operations, 0)}`
      : "export type operations = Record<string, any>;",
    "",
  ].join("\n");
}
