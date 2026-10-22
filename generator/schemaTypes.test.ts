import { execFileSync } from "node:child_process";
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, test } from "vitest";
import { generateSchemaTypes, UnsupportedOpenAPIFeatureError } from "./schemaTypes";

const spec = (schemas: Record<string, unknown> = {}, paths: Record<string, unknown> = {}) => ({
  openapi: "3.0.1",
  info: { title: "Fixture", version: "1" },
  paths,
  components: { schemas },
});
const tagPattern = "^tag:(?=[\\s\\S]*\\S)[\\s\\S]+$";
const labelPattern = "^label:(?=[\\s\\S]*\\S)(?![\\s\\S]*(?:['\"`\\\\;]|--|[\\x00-\\x1F]))[\\s\\S]+$";
const group = (pattern: string) => ({
  type: "array",
  items: {
    type: "string",
    oneOf: [
      { type: "string", enum: ["region", "provider"] },
      { type: "string", pattern },
    ],
  },
});
function unsupported(document: unknown): UnsupportedOpenAPIFeatureError {
  try {
    generateSchemaTypes(document);
  } catch (error) {
    expect(error).toBeInstanceOf(UnsupportedOpenAPIFeatureError);
    return error as UnsupportedOpenAPIFeatureError;
  }
  throw new Error("Expected generation to fail");
}

const fixture = () => {
  const document = spec(
    {
      Fields: {
        type: "object",
        required: ["name", "count", "active", "fallback", "nullRef", "readonlyValue"],
        properties: {
          name: { type: "string" },
          count: { type: "integer", format: "int64" },
          active: { type: "boolean" },
          fraction: { type: "number", format: "float" },
          nullable: { type: "string", nullable: true },
          nonNullable: { type: "string", nullable: false },
          fallback: { type: "string", default: "server default", nullable: true },
          legacyNull: { type: "string", "x-nullable": true },
          nullRef: { $ref: "#/components/schemas/Target", "x-nullable": true },
          readonlyValue: { type: "string", readOnly: true },
          writeOnlyValue: { type: "string", writeOnly: true },
          'strange"key': { type: "string", enum: ['a"b', "c\\d", "line\nbreak", "`value"] },
        },
      },
      Target: { type: "object", required: ["value"], properties: { value: { type: "string" } } },
      "Slash/~": { type: "string" },
      EscapedRef: { $ref: "#/components/schemas/Slash~1~0" },
      Strings: { type: "string", enum: ["a", "b", "a"], nullable: true },
      Array: { type: "array", items: { type: "string", nullable: true }, nullable: true },
      NestedArray: { type: "array", items: { type: "array", items: { type: "integer" } } },
      ObjectArray: { type: "array", items: { $ref: "#/components/schemas/Target" } },
      Tags: group(tagPattern),
      Labels: group(labelPattern),
      Dictionary: { type: "object", additionalProperties: { type: "array", items: { type: "integer" } } },
      MixedDictionary: {
        type: "object",
        required: ["known"],
        properties: { known: { type: "string" } },
        additionalProperties: { type: "string" },
      },
      Empty: { type: "object" },
      ClosedEmpty: { type: "object", additionalProperties: false },
      Open: { type: "object", additionalProperties: true },
      EmptyAdditional: { type: "object", additionalProperties: {} },
      InferredObject: { properties: { value: { type: "string" } } },
    },
    {
      "/things/{id}": {
        summary: "Things",
        description: "Path description",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "page", in: "query", schema: { type: "string" } },
        ],
        get: {
          operationId: "getThing",
          summary: "Get thing",
          description: "The description",
          deprecated: true,
          parameters: [
            { name: "page", in: "query", required: true, schema: { type: "integer", default: 1 } },
            { name: "groupings", in: "query", schema: group(labelPattern), style: "form", explode: false },
          ],
          responses: {
            "200": {
              description: "OK",
              content: {
                "application/json": { schema: { $ref: "#/components/schemas/Target" }, example: { value: "hello" } },
              },
            },
            "204": { description: "No content" },
            "404": { description: "Not found", content: {} },
          },
        },
        post: {
          operationId: "postThing",
          requestBody: {
            required: true,
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Fields" } },
              "multipart/form-data": {
                schema: { type: "object", properties: { file: { type: "string", format: "binary" } } },
              },
              "application/x-www-form-urlencoded": {
                schema: { type: "object", properties: { name: { type: "string" } } },
              },
            },
          },
          responses: {
            default: {
              description: "Default",
              content: { "application/json": { schema: { $ref: "#/components/schemas/Target" } } },
            },
          },
        },
        patch: {
          operationId: "patchThing",
          requestBody: { content: { "application/json": { schema: { type: "string" } } } },
          responses: { "204": { description: "Done" } },
        },
      },
      "/optional": {
        get: {
          operationId: "optional",
          parameters: [{ name: "q", in: "query", schema: { type: "string" } }],
          responses: { "204": { description: "Done" } },
        },
      },
    }
  );
  return document;
};

describe("declaration generation", () => {
  test("retains Record<string, any> for empty root exports", () => {
    const output = generateSchemaTypes({ openapi: "3.0.1", info: { title: "Empty", version: "1" }, paths: {} });
    for (const name of ["paths", "webhooks", "components", "$defs", "operations"])
      expect(output).toContain(`export type ${name} = Record<string, any>;`);
  });

  test("emits the complete structural contract and optional empty methods", () => {
    const output = generateSchemaTypes(fixture());
    expect(output).toContain('import type { NonEmptyString } from "./stringTypes";');
    for (const name of ["paths", "components", "operations"]) expect(output).toContain(`export interface ${name}`);
    expect(output).toContain("export type webhooks = Record<string, any>;");
    expect(output).toContain("export type $defs = Record<string, any>;");
    expect(output).toContain('get: operations["getThing"];');
    for (const method of ["put", "delete", "options", "head", "trace"]) expect(output).toContain(`${method}?: never;`);
    expect(output).toContain("[name: string]: unknown;");
    expect(output).toContain("requestBody?: never;");
    expect(output).toContain("content?: never;");
    for (const section of ["responses", "parameters", "requestBodies", "headers", "pathItems"])
      expect(output).toContain(`${section}: never;`);
    expect(output).not.toContain("Record<string, never>");
  });

  test("generated types compile and preserve requiredness, nullability, arrays, dictionaries, grouping brands, parameters and bodies", () => {
    const directory = mkdtempSync(join(tmpdir(), "vantage-schema-fixture-"));
    try {
      writeFileSync(join(directory, "schema.d.ts"), generateSchemaTypes(fixture()));
      copyFileSync(resolve("stringTypes.ts"), join(directory, "stringTypes.ts"));
      writeFileSync(
        join(directory, "assertions.ts"),
        `
import type { components, operations, paths } from "./schema";
import type { NonEmptyString } from "./stringTypes";
type S = components["schemas"];
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type Optional<T, K extends keyof T> = {} extends Pick<T, K> ? true : false;
type RequiredFields = Assert<Equal<Pick<S["Fields"], "name" | "count" | "active">, {name: string; count: number; active: boolean}>>;
type FallbackOptional = Assert<Optional<S["Fields"], "fallback">>;
type FallbackNullable = Assert<Equal<S["Fields"]["fallback"], string | null | undefined>>;
type Nullable = Assert<Equal<S["Fields"]["nullable"], string | null | undefined>>;
type NonNullableField = Assert<Equal<S["Fields"]["nonNullable"], string | undefined>>;
type LegacyNull = Assert<Equal<S["Fields"]["legacyNull"], string | null | undefined>>;
type RefNull = Assert<Equal<S["Fields"]["nullRef"], S["Target"] | null>>;
type Ref = Assert<Equal<S["EscapedRef"], S["Slash/~"]>>;
type Enum = Assert<Equal<S["Strings"], "a" | "b" | null>>;
type Array = Assert<Equal<S["Array"], (string | null)[] | null>>;
type NestedArray = Assert<Equal<S["NestedArray"], number[][]>>;
type ObjectArray = Assert<Equal<S["ObjectArray"], S["Target"][]>>;
type Dictionary = Assert<Equal<S["Dictionary"], { [key: string]: number[] }>>;
type MixedDictionary = Assert<Equal<S["MixedDictionary"], {known: string} & { [key: string]: string }>>;
type Empty = Assert<Equal<S["Empty"], Record<string, any>>>;
type ClosedEmpty = Assert<Equal<S["ClosedEmpty"], Record<string, any>>>;
type Open = Assert<Equal<S["Open"], { [key: string]: unknown }>>;
type EmptyAdditional = Assert<Equal<S["EmptyAdditional"], S["Open"]>>;
type Tags = Assert<Equal<S["Tags"][number], "region" | "provider" | \`tag:\${NonEmptyString}\`>>;
type Labels = Assert<Equal<S["Labels"][number], "region" | "provider" | \`label:\${NonEmptyString}\`>>;
type PathRef = Assert<Equal<paths["/things/{id}"]["get"], operations["getThing"]>>;
type InheritedPath = Assert<Equal<operations["getThing"]["parameters"]["path"], {id: string}>>;
type Override = Assert<Equal<operations["getThing"]["parameters"]["query"]["page"], number>>;
type GroupQuery = Assert<Equal<operations["getThing"]["parameters"]["query"]["groupings"], S["Labels"] | undefined>>;
type OptionalQuery = Assert<Optional<operations["optional"]["parameters"], "query">>;
type RequiredQuery = Assert<Equal<Optional<operations["getThing"]["parameters"], "query">, false>>;
type RequiredBody = Assert<Equal<Optional<operations["postThing"], "requestBody">, false>>;
type OptionalBody = Assert<Optional<operations["patchThing"], "requestBody">>;
type JsonBody = Assert<Equal<operations["postThing"]["requestBody"]["content"]["application/json"], S["Fields"]>>;
type FormBody = Assert<Equal<operations["postThing"]["requestBody"]["content"]["application/x-www-form-urlencoded"], { name?: string }>>;
type Binary = Assert<Equal<operations["postThing"]["requestBody"]["content"]["multipart/form-data"], { file?: string }>>;
type Response = Assert<Equal<operations["getThing"]["responses"][200]["content"]["application/json"], S["Target"]>>;
type MissingContent = Assert<Equal<operations["getThing"]["responses"][204]["content"], undefined>>;
declare let fields: S["Fields"];
// @ts-expect-error readOnly schema properties cannot be assigned
fields.readonlyValue = "new";
// @ts-expect-error grouping strings require the NonEmptyString brand
const rawTag: S["Tags"][number] = "tag:owner";
// @ts-expect-error labels use a different prefix
const wrongPrefix: S["Tags"][number] = "label:owner";
`
      );
      execFileSync(
        process.execPath,
        [
          resolve("node_modules/typescript/bin/tsc"),
          "--ignoreConfig",
          "--noEmit",
          "--strict",
          "--skipLibCheck",
          "false",
          "--types",
          "node",
          "--typeRoots",
          resolve("node_modules/@types"),
          "--target",
          "ESNext",
          "--module",
          "ESNext",
          "--moduleResolution",
          "Bundler",
          join(directory, "assertions.ts"),
        ],
        { stdio: "pipe" }
      );
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  }, 30_000);

  test.each(["int32", "int64", "float", "double", "date", "date-time", "binary"])(
    "preserves format %s in JSDoc",
    (format) => {
      const output = generateSchemaTypes(spec({ Value: { type: "string", format } }));
      expect(output).toContain(`/** Format: ${format} */`);
      expect(output).toContain("Value: string;");
    }
  );

  test("emits description/default/example/enum/deprecated and safely escapes comment terminators", () => {
    const output = generateSchemaTypes(
      spec({
        Value: {
          type: "string",
          enum: ["a", "b"],
          title: "Value title",
          description: "First\nSecond */ third",
          default: "a",
          example: { a: "b" },
          deprecated: true,
        },
      })
    );
    for (const text of [
      "Value title",
      "@deprecated",
      "@description First",
      "Second *\\/ third",
      "@default a",
      "@example {",
      '"a": "b"',
      "@enum {string}",
    ])
      expect(output).toContain(text);
    expect(output).not.toContain("Second */ third");
  });

  test("accepts validation-only constraints and opaque vendor extensions", () => {
    const output = generateSchemaTypes(
      spec({
        Value: {
          type: "object",
          minProperties: 0,
          maxProperties: 10,
          "x-custom": { allOf: "opaque metadata" },
          properties: {
            number: {
              type: "number",
              minimum: 0,
              maximum: 20,
              exclusiveMinimum: false,
              exclusiveMaximum: true,
              multipleOf: 2,
            },
            string: { type: "string", pattern: "^a", minLength: 1, maxLength: 20 },
            array: { type: "array", minItems: 1, maxItems: 10, uniqueItems: true, items: { type: "string" } },
          },
        },
      })
    );
    expect(output).toContain("number?: number;");
    expect(output).toContain("string?: string;");
    expect(output).toContain("array?: (string)[];");
  });

  test("accepts metadata objects, security and reusable components", () => {
    const document: any = spec();
    document.info = {
      title: "Vantage",
      version: "1",
      termsOfService: "https://example.test",
      contact: { name: "Support", url: "https://example.test", email: "help@example.test" },
      license: { name: "MIT", url: "https://example.test/license" },
    };
    document.servers = [
      { url: "https://{host}", variables: { host: { enum: ["example.test"], default: "example.test" } } },
    ];
    document.externalDocs = { description: "Docs", url: "https://example.test" };
    document.tags = [{ name: "Tag", externalDocs: { url: "https://example.test" } }];
    document.components.securitySchemes = {
      oauth2: {
        type: "oauth2",
        flows: { clientCredentials: { tokenUrl: "https://example.test/token", scopes: { read: "Read API" } } },
      },
    };
    document.security = [{ oauth2: ["read"] }];
    document.components.responses = { Empty: { description: "Empty" } };
    document.components.parameters = { Id: { name: "id", in: "path", schema: { type: "string" } } };
    document.components.requestBodies = {
      EmptyBody: { content: {} },
      Body: { content: { "application/json": { schema: { type: "boolean" } } } },
    };
    document.components.pathItems = {
      Reusable: { get: { operationId: "reusable", responses: { "200": { description: "OK" } } } },
    };
    const output = generateSchemaTypes(document);
    expect(output).toContain("Id: string;");
    expect(output).toContain('"*/*"?: never;');
    expect(output).toContain('get: operations["reusable"];');
    expect(output).toContain("reusable: {");
    expect(output).toContain('"application/json": boolean;');
  });

  test("is deterministic on the checked-in first-party spec", () => {
    const document = JSON.parse(readFileSync(resolve("openapi.json"), "utf8"));
    expect(generateSchemaTypes(document)).toBe(generateSchemaTypes(document));
  });
});

describe("unsupported constructs", () => {
  test.each([
    ["allOf", { type: "object", allOf: [{ type: "string" }] }],
    ["anyOf", { type: "object", anyOf: [{ type: "string" }] }],
    ["not", { type: "string", not: { type: "string" } }],
    ["discriminator", { type: "object", discriminator: { propertyName: "kind" } }],
    ["$ref", { $ref: "https://example.test/schema.json#/Foo" }],
    ["$ref", { $ref: "#/components/parameters/Id" }],
    ["unresolved $ref", { $ref: "#/components/schemas/Missing" }],
    ["unknownKeyword", { type: "string", unknownKeyword: true }],
    ["type", { type: ["string", "null"] }],
    ["type", { type: "surprise" }],
    ["oneOf", { type: "string", oneOf: [{ type: "string", enum: ["a"] }, { type: "integer" }] }],
    ["enum", { type: "integer", enum: [1, 2] }],
    ["items", { type: "array" }],
  ])("rejects %s with a schema pointer", (feature, schema) => {
    const error = unsupported(spec({ Foo: { type: "object", properties: { bar: schema } } }));
    expect(error.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          feature: expect.stringContaining(feature),
          pointer: "#/components/schemas/Foo/properties/bar",
        }),
      ])
    );
    expect(error.message).toContain("generator/schemaTypes.ts");
    expect(error.message).toContain("generator/schemaTypes.test.ts");
    expect(error.message).toContain("npm run generate");
  });

  test.each(["header", "cookie"])("rejects %s parameters with escaped path pointers", (location) => {
    const error = unsupported(
      spec(
        {},
        {
          "/foo/~id": {
            get: {
              operationId: "get",
              parameters: [{ name: "value", in: location, schema: { type: "string" } }],
              responses: {},
            },
          },
        }
      )
    );
    expect(error.issues).toContainEqual(
      expect.objectContaining({
        feature: `${location} parameter location`,
        pointer: "#/paths/~1foo~1~0id/get/parameters/0",
      })
    );
  });

  test("aggregates issues across components, operations, nested unsupported compositions and media types", () => {
    const document: any = spec(
      {
        "Foo/~": { type: "object", allOf: [{ type: "string", madeUp: true }] },
        Other: { type: "string", anyOf: [{ $ref: "external.json" }] },
      },
      {
        "/bad": {
          get: {
            operationId: "bad",
            parameters: [{ name: "h", in: "header", schema: { type: "string" } }],
            responses: {
              "200": {
                description: "OK",
                content: { "text/plain": { schema: { type: "string", anotherUnknown: true } } },
              },
            },
          },
        },
      }
    );
    const error = unsupported(document);
    expect(error.issues).toHaveLength(7);
    expect(error.issues.map((issue) => issue.pointer)).toContain("#/components/schemas/Foo~1~0/allOf/0");
    expect(error.message).toContain("hit 7 unsupported construct(s) in openapi.json");
    for (let index = 1; index <= 7; index++) expect(error.message).toContain(`[${index}]`);
    for (const issue of error.issues) expect(issue.snippet.length).toBeLessThanOrEqual(300);
  });

  test.each([
    [
      "root",
      (document: any) => {
        document.futureRootKeyword = true;
      },
      "#",
    ],
    [
      "info",
      (document: any) => {
        document.info.future = true;
      },
      "#/info",
    ],
    [
      "operation",
      (document: any) => {
        document.paths["/foo"].get.callbacks = {};
      },
      "#/paths/~1foo/get",
    ],
    [
      "parameter",
      (document: any) => {
        document.paths["/foo"].get.parameters = [{ name: "q", in: "query", schema: { type: "string" }, future: true }];
      },
      "#/paths/~1foo/get/parameters/0",
    ],
    [
      "requestBody",
      (document: any) => {
        document.paths["/foo"].get.requestBody = { content: {}, future: true };
      },
      "#/paths/~1foo/get/requestBody",
    ],
    [
      "response",
      (document: any) => {
        document.paths["/foo"].get.responses[200].future = true;
      },
      "#/paths/~1foo/get/responses/200",
    ],
    [
      "mediaType",
      (document: any) => {
        document.paths["/foo"].get.responses[200].content = {
          "application/json": { schema: { type: "string" }, encoding: {} },
        };
      },
      "#/paths/~1foo/get/responses/200/content/application~1json",
    ],
  ])("checks the keyword allowlist on %s objects", (_name, mutate, path) => {
    const document = spec({}, { "/foo": { get: { operationId: "get", responses: { "200": { description: "OK" } } } } });
    mutate(document);
    expect(unsupported(document).issues.some((issue) => issue.pointer === path)).toBe(true);
  });

  test("keeps error snippets bounded and includes agent-ready remediation", () => {
    const error = unsupported(
      spec({ Long: { type: "object", description: "long ".repeat(100), allOf: [{ type: "string" }] } })
    );
    const issue = error.issues.find((issue) => issue.feature === "allOf")!;
    expect(issue.snippet).toHaveLength(300);
    expect(issue.snippet.endsWith("...")).toBe(true);
    expect(issue.howToFix).toContain("intersection `A & B`");
    expect(error.toString()).toContain("UnsupportedOpenAPIFeatureError: the in-house OpenAPI");
    expect(error.message).toContain("paste this entire error into a coding agent");
  });

  test("rejects a media type without a schema instead of silently emitting unknown", () => {
    const error = unsupported(
      spec(
        {},
        {
          "/foo": {
            get: {
              operationId: "get",
              responses: { "200": { description: "OK", content: { "application/json": {} } } },
            },
          },
        }
      )
    );
    expect(error.issues).toContainEqual(
      expect.objectContaining({ pointer: "#/paths/~1foo/get/responses/200/content/application~1json/schema" })
    );
  });

  test("rejects changed grouping regexes instead of widening the branded strings", () => {
    const error = unsupported(spec({ Value: group("^tag:.*$") }));
    expect(error.issues).toContainEqual(
      expect.objectContaining({
        feature: expect.stringContaining("oneOf"),
        pointer: "#/components/schemas/Value/items",
      })
    );
  });

  test.each([null, false, [], { openapi: "3.1.0" }, spec({ Bad: {} }), spec({ Bad: { type: "array", items: [] } })])(
    "rejects malformed/unsupported input %#",
    (document) => {
      expect(() => generateSchemaTypes(document)).toThrow(UnsupportedOpenAPIFeatureError);
    }
  );
});
