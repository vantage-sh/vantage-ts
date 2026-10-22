import { copyFileSync, writeFileSync } from "node:fs";

// tsc does not copy declaration inputs into outDir.
copyFileSync("swaggerSchema.d.ts", "dist/swaggerSchema.d.ts");

// Preserve types for direct imports of dist/index.mjs as well as the package root.
writeFileSync("dist/index.d.mts", 'export * from "./index.js";\n');
