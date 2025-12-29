import type { paths } from "./swaggerSchema";

/** A string that is guaranteed to not contain slashes. Can be generated with {@link pathEncode} */
export type NoSlashString = string & { readonly __noSlash: unique symbol };

/** Encodes a path segment then returns a type that guarantees to TS it does not contain slashes. */
export function pathEncode(value: string) {
    return encodeURIComponent(value) as NoSlashString;
}

type UnBracket<S extends string> = S extends `${infer X}{${string}}${infer Z}`
    ? UnBracket<`${X}${NoSlashString}${Z}`>
    : S;

type PathsRedefined = {
    [K in keyof paths as `/v2${UnBracket<K>}`]: [paths[K], K];
};

/** Defines a union of paths supported by the client. */
export type Path = keyof PathsRedefined;

type MethodsCased = {
    get: "GET";
    post: "POST";
    put: "PUT";
    delete: "DELETE";
    patch: "PATCH";
    head: "HEAD";
    options: "OPTIONS";
    trace: "TRACE";
};

type MethodsInverted = {
    [K in keyof MethodsCased as MethodsCased[K]]: K;
};

type MethodsPossiblyUndefined = {
    [K in keyof MethodsCased]?: any;
};

type Methods<P extends MethodsPossiblyUndefined> = {
    [K in keyof MethodsCased]: P[K] extends undefined ? never : MethodsCased[K];
}[keyof MethodsCased];

/** Defines the supported request methods for a given path. */
export type SupportedMethods<P extends Path> = Methods<PathsRedefined[P][0]>;

type Query<
    T extends {
        parameters?: {
            query?: any;
        };
    } | undefined,
> = T["parameters"]["query"] extends never | undefined ? {} : T["parameters"]["query"];

type ReqBody<
    T extends {
        requestBody?: {
            content: any;
        };
    } | undefined,
> = T extends { requestBody: { content: { "application/json": infer R } } }
    ? R
    : T extends { requestBody: { content: { "multipart/form-data": infer R } } }
        ? R
        : {};

/** Defines the request body type for a given path and method. */
export type RequestBodyForPathAndMethod<
    P extends Path,
    M extends SupportedMethods<P>
> = M extends "GET" ?
    Query<PathsRedefined[P][0][MethodsInverted[M]]> | undefined :
    ReqBody<PathsRedefined[P][0][MethodsInverted[M]]>;

type ExtendsGoodResponseCode<Code extends number, Output> = {
    [C in Code]: {
        responses: {
            [_ in C]: {
                content: {
                    "application/json": Output;
                };
            };
        };
    };
}[Code];

type PatchLinks<T> = T extends { links?: any }
    ? Omit<T, "links"> & {
        links?: {
            next?: string | null;
        };
    }
    : T;

/** Defines the response body type for a given path and method. */
export type ResponseBodyForPathAndMethod<
    P extends Path,
    M extends SupportedMethods<P>,
> = PathsRedefined[P][0][MethodsInverted[M]] extends ExtendsGoodResponseCode<200 | 201 | 202 | 203 | 204, infer R>
    ? PatchLinks<R>
    : void;

/** We need to make this a string rather than a TS type so we can use it at runtime. */
type StringifyType<T extends string> = T extends `${infer A}{${string}}${infer B}`
    ? `${StringifyType<A>}{}${StringifyType<B>}`
    : T;

type Multipart = {
    [key in "post" | "put" | "patch" | "delete"]: {
        [_ in key]: {
            requestBody: {
                content: {
                    "multipart/form-data": any;
                };
            };
        };
    };
};

type MultipartPathInfo<T> = T extends Multipart[keyof Multipart] ? {
    // This won't be blank, figure out what cases we extend
    [
        MultipartMethodStructureName in keyof Multipart
        as
            T extends Multipart[MultipartMethodStructureName]
                ? MethodsCased[MultipartMethodStructureName]
                : never
    ]: true;
} : never;

type MultipartEdgeCases = {
    [P in Path as MultipartPathInfo<PathsRedefined[P][0]> extends never ? never : `/v2${StringifyType<PathsRedefined[P][1]>}`]: MultipartPathInfo<PathsRedefined[P][0]>;
}

/**
 * You need to add new edgecase routes here! If a route uses multipart/form-data, you will need to add it here.
 * Note that you will get a type error to this object if you do not.
 */
const multipartEdgeCases: MultipartEdgeCases = {
    "/v2/exchange_rates/csv": {
        POST: true,
    },
    "/v2/business_metrics/{}/values.csv": {
        PUT: true,
    },
    "/v2/integrations/{}/costs.csv": {
        POST: true,
    },
};

const regexes: { [key: string]: RegExp[] } = {};

function escapeRegex(s: string): string {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

for (const [path, methods] of Object.entries(multipartEdgeCases)) {
    const pathSplit = path.split("{}").map(escapeRegex).join("(.+?)");
    for (const [method, ok] of Object.entries(methods)) {
        if (ok) {
            if (!regexes[method]) {
                regexes[method] = [];
            }
            regexes[method].push(new RegExp(`^${pathSplit}$`));
        }
    }
}

function isMultipartMethod(method: string, path: string): boolean {
    if (Object.prototype.hasOwnProperty.call(regexes, method)) {
        for (const regex of regexes[method]) {
            const t = regex.test(path);
            regex.lastIndex = 0;
            if (t) {
                return true;
            }
        }
    }
    return false;
}

function handleGetBodyParams(url: URL, body: any) {
    if (body) {
        for (const [key, value] of Object.entries(body)) {
            url.searchParams.append(key, `${value}`);
        }
    }
}

/** Defines a vantage API failure */
export class VantageApiError extends Error {
    public readonly errors: string[] | null;

    constructor(public readonly status: number, public readonly statusText: string, private body: string) {
        let e: string[] | null = null;
        try {
            const parsed = JSON.parse(body);
            if (Array.isArray(parsed.errors)) {
                e = parsed.errors;
            }
        } catch {}
        super(`Vantage API Error: ${status} ${statusText}` + (e ? ` - ${e}` : ""));
        this.errors = e;
    }
}

async function execute(
    url: URL,
    method: string,
    headers: Record<string, string>,
    body?: any,
): Promise<any> {
    const res = await fetch(url.toString(), {
        method,
        headers,
        body,
    });
    if (!res.ok) {
        throw new VantageApiError(res.status, res.statusText, await res.text());
    }
    if (res.status === 204) {
        return;
    }
    const text = await res.text();
    if (!text) {
        return;
    }
    return JSON.parse(text);
}

/** Defines the base client for all API requests. */
export class BaseClient {
    /**
     * Initializes a new instance of the client.
     * @param bearerToken The bearer token for authentication.
     * @param baseUrl The base URL for the API. Defaults to "https://api.vantage.sh".
     */
    constructor(
        private readonly bearerToken: string,
        public readonly baseUrl: string = "https://api.vantage.sh",
    ) {}

    /** Sends a request to the API. */
    async request<
        RequestPath extends Path,
        RequestMethod extends SupportedMethods<RequestPath>
    >(
        path: RequestPath,
        method: RequestMethod,
        body: RequestBodyForPathAndMethod<RequestPath, RequestMethod>,
    ): Promise<ResponseBodyForPathAndMethod<RequestPath, RequestMethod>> {
        const url = new URL(path, this.baseUrl);

        const headers: Record<string, string> = {
            "Authorization": `Bearer ${this.bearerToken}`,
        };
        if (method === "GET") {
            // Set query parameters for GET requests
            handleGetBodyParams(url, body);
            return execute(url, method, headers);
        }

        // Figure out if this route is a multipart route
        const isMultipart = isMultipartMethod(method, path);

        if (isMultipart) {
            // Handle multipart/form-data request
            const formData = new FormData();
            for (const [key, value] of Object.entries(body as Record<string, any>)) {
                formData.append(key, value);
            }
            headers["Content-Type"] = "multipart/form-data";
            return execute(url, method, headers, formData);
        }
        headers["Content-Type"] = "application/json";
        return execute(url, method, headers, JSON.stringify(body));
    }
}
