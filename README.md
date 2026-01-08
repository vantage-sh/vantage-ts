# @vantage-sh/vantage-client

A fully-typed TypeScript SDK for the [Vantage](https://vantage.sh) API. Types and client methods are auto-generated from the official OpenAPI specification.

## Installation

```bash
npm install @vantage-sh/vantage-client
```

## Two Ways to Use

This SDK provides two distinct modes of operation: a **high-level resource API** for convenience, and a **low-level typed request method** for full control with complete type safety.

### High-Level API

The `APIV2Client` organizes endpoints by resource with intuitive CRUD methods:

```typescript
import { APIV2Client } from "@vantage-sh/vantage-client";

const client = new APIV2Client("your-api-token");

// List resources with query parameters
const reports = await client.costReports.list({ page: 1 });

// Get a specific resource by token
const report = await client.costReports.get("rprt_abc123");

// Create a new resource
const folder = await client.folders.create({
  title: "Production Costs",
  workspace_token: "wrkspc_123",
});

// Update a resource
await client.folders.update("fldr_abc123", {
  title: "Updated Title",
});

// Delete a resource
await client.folders.delete("fldr_abc123");
```

Resources with nested or specialized endpoints expose additional methods:

```typescript
// Access sub-resources
const costs = await client.costs.getForCostReport("rprt_abc123", {
  start_date: "2024-01-01",
  end_date: "2024-01-31",
});
```

### Low-Level Typed Requests

For full control, use the `request` method directly with path strings. The SDK provides **complete type safety** — TypeScript validates that your path exists, your method is supported, and your request/response bodies match the schema:

```typescript
import { APIV2Client } from "@vantage-sh/vantage-client";

const client = new APIV2Client("your-api-token");

// Path and method are type-checked against the OpenAPI schema
const report = await client.request(
  "/cost_reports/rprt_abc123",
  "GET",
  undefined
);

// TypeScript enforces correct body shape for POST/PUT/PATCH
const newFolder = await client.request("/folders", "POST", {
  title: "My Folder",
  workspace_token: "wrkspc_123",
});

// Query parameters are passed as the body for GET requests
const reports = await client.request("/cost_reports", "GET", {
  page: 1,
});
```

#### Path Type Safety

The `Path` type is a union of all valid API paths. TypeScript will error on invalid paths:

```typescript
// ✓ Valid path
await client.request("/cost_reports", "GET", { page: 1 });

// ✗ TypeScript error: invalid path
await client.request("/not_a_real_endpoint", "GET", {});
```

#### Method Type Safety

The `SupportedMethods<P>` type ensures only valid HTTP methods for each path:

```typescript
// ✓ GET is supported on /cost_reports
await client.request("/cost_reports", "GET", { page: 1 });

// ✗ TypeScript error: DELETE not supported on /cost_reports
await client.request("/cost_reports", "DELETE", {});
```

#### Request/Response Types

Import types for individual endpoints when needed:

```typescript
import type {
  GetCostReportResponse,
  CreateFolderRequest,
  CreateFolderResponse,
} from "@vantage-sh/vantage-client";

function displayReport(report: GetCostReportResponse) {
  console.log(report.title);
}
```

## Error Handling

By default, API errors are thrown as `VantageAPIError` with structured error information:

```typescript
import { VantageAPIError } from "@vantage-sh/vantage-client";

try {
  await client.costReports.get("invalid_token");
} catch (error) {
  if (error instanceof VantageAPIError) {
    console.log(error.status);     // 404
    console.log(error.statusText); // "Not Found"
    console.log(error.errors);     // ["Resource not found"] or null
  }
}
```

### Never Throw Mode

For Go-style error handling without try/catch, enable never throw mode by passing `true` as the second argument to the client constructor:

```typescript
import { APIV2Client, VantageAPIError } from "@vantage-sh/vantage-client";

const client = new APIV2Client("your-api-token", true);

// All methods return [result, null] on success or [null, error] on failure
const [report, error] = await client.costReports.get("rprt_abc123");

if (error) {
  console.log(error.status);  // 404
  console.log(error.errors);  // ["Resource not found"]
  return;
}

// TypeScript knows report is defined here
console.log(report.title);
```

This pattern works with all client methods, including the low-level `request` method:

```typescript
const client = new APIV2Client("your-api-token", true);

const [folders, error] = await client.request("/folders", "GET", { page: 1 });

if (error) {
  // Handle error
  return;
}

// Use folders safely
```

## Utilities

### Path Encoding

Use `pathEncode` to safely encode dynamic path segments:

```typescript
import { pathEncode } from "@vantage-sh/vantage-client";

const token = pathEncode(userProvidedToken);
const report = await client.request(
  `/cost_reports/${token}`,
  "GET",
  undefined
);
```

## Development

### Building

```bash
npm run build
```

This fetches the latest OpenAPI schema from the Vantage API, generates TypeScript types, and compiles the client.

### Type Checking

```bash
npm run type-check
```

### Multipart Edge Cases

The client automatically detects `multipart/form-data` routes and handles them appropriately. However, this detection requires a manually-maintained mapping in `BaseClient.ts`:

```typescript
const multipartEdgeCases: MultipartEdgeCases = {
  "/exchange_rates/csv": {
    POST: true,
  },
  "/business_metrics/{}/values.csv": {
    PUT: true,
  },
  // ...
};
```

The `MultipartEdgeCases` type is derived from the OpenAPI schema. If a new multipart route is added to the API, **TypeScript will produce an error** until you add the route to this object. Path parameters are represented as `{}` in the keys.

### Type Helpers

The SDK exports several utility types for advanced use:

| Type | Description |
|------|-------------|
| `Path` | Union of all valid API paths |
| `SupportedMethods<P>` | Valid HTTP methods for a given path |
| `RequestBodyForPathAndMethod<P, M>` | Request body type for a path/method |
| `ResponseBodyForPathAndMethod<P, M>` | Response body type for a path/method |
| `NoSlashString` | Branded type for safely encoded path segments |
