import { expect, test, vi, beforeEach, afterEach } from "vitest";
import { BaseClient } from "./BaseClient";

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
