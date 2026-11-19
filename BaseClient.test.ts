import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { BaseClient } from "./BaseClient";
import { APIV2Client, type CreateCustomCalculationRequest } from "./dist";

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
});

afterEach(() => {
  mockFetch.mockClear();
});

test("GET request passes params as query string", async () => {
  // Mock successful response
  mockFetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    text: async () => JSON.stringify({ costs: [] }),
  });

  const client = new BaseClient("test-token", false, "https://api.vantage.sh");

  // Make a GET request with query parameters
  await client.request("/v2/costs", "GET", {
    start_date: "2024-01-01",
    end_date: "2024-01-31",
  });

  // Verify fetch was called
  expect(mockFetch).toHaveBeenCalledTimes(1);

  const [url, options] = mockFetch.mock.calls[0];

  // Check that URL contains query parameters
  expect(url).toContain("start_date=2024-01-01");
  expect(url).toContain("end_date=2024-01-31");

  // Verify method is GET
  expect(options.method).toBe("GET");

  // Verify Authorization header
  expect(options.headers.Authorization).toBe("Bearer test-token");

  // Verify no body is sent with GET
  expect(options.body).toBeUndefined();
});

test("POST request passes params as JSON body", async () => {
  // Mock successful response
  mockFetch.mockResolvedValueOnce({
    ok: true,
    status: 201,
    text: async () => JSON.stringify({ token: "new-token" }),
  });

  const client = new BaseClient("test-token", false, "https://api.vantage.sh");

  // Make a POST request with body parameters
  await client.request("/v2/access_grants", "POST", {
    resource_token: "resource-123",
    team_token: "team-456",
  });

  // Verify fetch was called
  expect(mockFetch).toHaveBeenCalledTimes(1);

  const [url, options] = mockFetch.mock.calls[0];

  // Check that URL doesn't contain query parameters
  expect(url).toBe("https://api.vantage.sh/v2/access_grants");

  // Verify method is POST
  expect(options.method).toBe("POST");

  // Verify Authorization header
  expect(options.headers.Authorization).toBe("Bearer test-token");

  // Verify Content-Type header
  expect(options.headers["Content-Type"]).toBe("application/json");

  // Verify body is JSON stringified
  expect(options.body).toBeTruthy();
  const body = JSON.parse(options.body);
  expect(body).toEqual({
    resource_token: "resource-123",
    team_token: "team-456",
  });
});

test("Multipart request passes params as FormData", async () => {
  // Mock successful response
  mockFetch.mockResolvedValueOnce({
    ok: true,
    status: 201,
    text: async () => JSON.stringify({ success: true }),
  });

  const client = new BaseClient("test-token", false, "https://api.vantage.sh");

  // Create a mock file for testing
  const csvContent = "date,rate\n2024-01-01,1.5";

  // Make a POST request to a multipart endpoint
  await client.request("/v2/exchange_rates/csv", "POST", {
    csv: csvContent,
  });

  // Verify fetch was called
  expect(mockFetch).toHaveBeenCalledTimes(1);

  const [url, options] = mockFetch.mock.calls[0];

  // Check that URL doesn't contain query parameters
  expect(url).toBe("https://api.vantage.sh/v2/exchange_rates/csv");

  // Verify method is POST
  expect(options.method).toBe("POST");

  // Verify Authorization header
  expect(options.headers.Authorization).toBe("Bearer test-token");

  // Verify Content-Type header
  expect(options.headers["Content-Type"]).toBe("multipart/form-data");

  // Verify body is FormData
  expect(options.body).toBeInstanceOf(FormData);

  const formData = options.body as FormData;
  expect(formData.get("csv")).toBe(csvContent);
});

const apiClient = new APIV2Client("test-token", false, "https://example.invalid");

function mockResponse(body: unknown) {
  mockFetch.mockReset().mockResolvedValue({ ok: true, status: 200, text: async () => JSON.stringify(body) });
}

test("calculation CRUD uses typed bodies, pagination, and encoded tokens", async () => {
  const calculation = { token: "cstm_clcltn_123", description: null };
  const body: CreateCustomCalculationRequest = {
    title: "Usage ratio",
    description: "Two usage units",
    operation: "division",
    filter: {
      filter_numerator: "costs.provider = 'aws'",
      filter_denominator: "costs.provider = 'aws'",
      usage_unit: ["hours", "requests"],
      usage_unit_numerator: ["hours", "seconds"],
      usage_unit_denominator: ["GB", "bytes"],
    },
  };
  mockResponse({ custom_calculations: [calculation], links: { next: "page2" } });
  expect(await apiClient.customCalculations.list({ page: 2, limit: 10 })).toEqual({
    custom_calculations: [calculation],
    links: { next: "page2" },
  });
  expect(mockFetch.mock.calls[0][0]).toBe("https://example.invalid/v2/custom_calculations?page=2&limit=10");
  expect(mockFetch.mock.calls[0][1].body).toBeUndefined();

  mockResponse(calculation);
  expect(await apiClient.customCalculations.create(body)).toEqual(calculation);
  expect(mockFetch.mock.calls[0][1]).toMatchObject({ method: "POST", body: JSON.stringify(body) });

  await apiClient.customCalculations.get("token/with space");
  await apiClient.customCalculations.update("token/with space", { description: null, cost_report_tokens: [] });
  mockFetch.mockResolvedValueOnce({ ok: true, status: 204, text: async () => "" });
  expect(await apiClient.customCalculations.delete("token/with space")).toBeUndefined();
  expect(mockFetch.mock.calls.slice(1).map(([url, options]) => [url, options.method])).toEqual([
    ["https://example.invalid/v2/custom_calculations/token%2Fwith%20space", "GET"],
    ["https://example.invalid/v2/custom_calculations/token%2Fwith%20space", "PUT"],
    ["https://example.invalid/v2/custom_calculations/token%2Fwith%20space", "DELETE"],
  ]);
  expect(JSON.parse(mockFetch.mock.calls[2][1].body)).toEqual({ description: null, cost_report_tokens: [] });
});

test("attachment omission, null, empty, and populated arrays survive JSON serialization", async () => {
  mockResponse({});
  for (const value of [undefined, null, [], ["resource_token"]]) {
    await apiClient.customCalculations.update("calculation", { cost_report_tokens: value });
    await apiClient.costReports.update("report", { custom_calculation_tokens: value });
    const expected = value === undefined ? {} : { cost_report_tokens: value };
    expect(JSON.parse(mockFetch.mock.calls[mockFetch.mock.calls.length - 2][1].body)).toEqual(expected);
    expect(JSON.parse(mockFetch.mock.calls[mockFetch.mock.calls.length - 1][1].body)).toEqual(
      value === undefined ? {} : { custom_calculation_tokens: value }
    );
  }
});

test("description omission, null, empty, and text preserve their wire values", async () => {
  mockResponse({});
  for (const description of [undefined, null, "", "new description"]) {
    await apiClient.customCalculations.update("calculation", { description });
    expect(JSON.parse(mockFetch.mock.calls[mockFetch.mock.calls.length - 1][1].body)).toEqual(
      description === undefined ? {} : { description }
    );
  }
});
