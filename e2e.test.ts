import { APIV2Client, VantageAPIError } from "./dist";
import { expect, test, describe } from "vitest";

const token = process.env.VANTAGE_API_TOKEN;
if (!token) {
    throw new Error("VANTAGE_API_TOKEN environment variable is not set.");
}

const workspaceToken = process.env.VANTAGE_WORKSPACE_TOKEN;
if (!workspaceToken) {
    throw new Error("VANTAGE_WORKSPACE_TOKEN environment variable is not set.");
}

let folderToken: string;

test("POST request with parameters (create folder)", async () => {
    const client = new APIV2Client(token);
    const folder = await client.folders.create({
        title: "E2E Test Folder",
        workspace_token: workspaceToken,
    });
    folderToken = folder.token;
    expect(folder.title).toBe("E2E Test Folder");
});

describe("GET requests for folder", () => {
    test("never throw off", async () => {
        if (!folderToken) {
            throw new Error("Folder token is not set from previous test.");
        }
        const client = new APIV2Client(token);
        const folder = await client.folders.get(folderToken);
        expect(folder.title).toBe("E2E Test Folder");
    });

    test("never throw on", async () => {
        if (!workspaceToken) {
            throw new Error("Workspace token is not set from previous test.");
        }
        const client = new APIV2Client(token, true);
        const [folder, error] = await client.folders.get(folderToken);
        expect(error).toBeNull();
        expect(folder.title).toBe("E2E Test Folder");
    });
});

describe("PUT requests for folder", () => {
    test("never throw off", async () => {
        if (!folderToken) {
            throw new Error("Folder token is not set from previous test.");
        }
        const client = new APIV2Client(token);
        const updated = await client.folders.update(folderToken, {
            title: "Updated E2E Test Folder",
        });
        expect(updated.title).toBe("Updated E2E Test Folder");
    });
    
    test("never throw on", async () => {
        if (!folderToken) {
            throw new Error("Folder token is not set from previous test.");
        }
        const client = new APIV2Client(token, true);
        const [updated, error] = await client.folders.update(folderToken, {
            title: "Updated E2E Test Folder Again",
        });
        expect(error).toBeNull();
        expect(updated.title).toBe("Updated E2E Test Folder Again");
    });
});

test("DELETE request (delete folder)", async () => {
    if (!folderToken) {
        throw new Error("Folder token is not set from previous test.");
    }
    const client = new APIV2Client(token);
    await client.folders.delete(folderToken);
});


describe("API throws", () => {
    test("never throw works", async () => {
        const client = new APIV2Client("bad", true);
        const [response, error] = await client.me.get();
        expect(response).toBeNull();
        expect(error).not.toBeNull();
        expect(error).toBeInstanceOf(VantageAPIError);
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
        expect(caughtError).toBeInstanceOf(VantageAPIError);
        expect(caughtError.status).toBe(401);
    });
});
