import { writeFileSync } from "node:fs";

async function main() {
  const response = await fetch("https://api.vantage.sh/v2/oas_v3.json");
  if (!response.ok) {
    throw new Error(`Failed to fetch OpenAPI schema: ${response.status} ${response.statusText}`);
  }

  const schema = await response.json();
  writeFileSync("openapi.json", `${JSON.stringify(schema, null, 2)}\n`, { encoding: "utf-8" });
  console.log("Updated openapi.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
