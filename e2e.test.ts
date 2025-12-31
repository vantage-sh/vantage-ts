import { APIV2Client, VantageApiError } from "./dist";
import { expect, test, describe } from "vitest";

const token = process.env.VANTAGE_API_TOKEN;
if (!token) {
    throw new Error("VANTAGE_API_TOKEN environment variable is not set.");
}

let workspaceToken: string;

test("POST request with parameters (create workspace)", async () => {
    const client = new APIV2Client(token);
    const workspace = await client.workspaces.create({
        name: "E2E Test Workspace",
    });
    workspaceToken = workspace.token;
    expect(workspace.name).toBe("E2E Test Workspace");
});

describe("GET requests for workspace", () => {
    test("never throw off", async () => {
        if (!workspaceToken) {
            throw new Error("Workspace token is not set from previous test.");
        }
        const client = new APIV2Client(token);
        const workspace = await client.workspaces.get(workspaceToken);
        expect(workspace.token).toBe(workspaceToken);
    });

    test("never throw on", async () => {
        if (!workspaceToken) {
            throw new Error("Workspace token is not set from previous test.");
        }
        const client = new APIV2Client(token, true);
        const [workspace, error] = await client.workspaces.get(workspaceToken);
        expect(error).toBeNull();
        expect(workspace.token).toBe(workspaceToken);
    });
});

describe("PUT requests for workspace", () => {
    test("never throw off", async () => {
        if (!workspaceToken) {
            throw new Error("Workspace token is not set from previous test.");
        }
        const client = new APIV2Client(token);
        const updated = await client.workspaces.update(workspaceToken, {
            name: "Updated E2E Test Workspace",
        });
        expect(updated.name).toBe("Updated E2E Test Workspace");
    });
    
    test("never throw on", async () => {
        if (!workspaceToken) {
            throw new Error("Workspace token is not set from previous test.");
        }
        const client = new APIV2Client(token, true);
        const [updated, error] = await client.workspaces.update(workspaceToken, {
            name: "Updated E2E Test Workspace Again",
        });
        expect(error).toBeNull();
        expect(updated.name).toBe("Updated E2E Test Workspace Again");
    });
});

test("DELETE request (delete workspace)", async () => {
    if (!workspaceToken) {
        throw new Error("Workspace token is not set from previous test.");
    }
    const client = new APIV2Client(token);
    await client.workspaces.delete(workspaceToken);
});


describe("API throws", () => {
    test("never throw works", async () => {
        const client = new APIV2Client("bad", true);
        const [response, error] = await client.me.get();
        expect(response).toBeNull();
        expect(error).not.toBeNull();
        expect(error).toBeInstanceOf(VantageApiError);
        expect(error.status).toBe(401);
    });

    test("throw works", async () => {
        const client = new APIV2Client("bad", false);
        let caughtError: any = null;
        try {
            await client.me.get();
        } catch (e) {
            caughtError = e;
        }
        expect(caughtError).not.toBeNull();
        expect(caughtError).toBeInstanceOf(VantageApiError);
        expect(caughtError.status).toBe(401);
    });
});
