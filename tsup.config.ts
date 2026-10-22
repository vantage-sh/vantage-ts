import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  // Preserve the published runtime target independently of TypeScript's target.
  target: "node16",
  // Declarations are emitted separately by tsc; tsup's bundler uses the TS 6 API.
  dts: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
