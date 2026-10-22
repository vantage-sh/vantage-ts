import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  // Preserve the published runtime target independently of TypeScript's target.
  target: "node16",
  dts: {
    compilerOptions: {
      // tsup 8 injects baseUrl: "." with no override to remove it. Drop this
      // workaround when its declaration bundler supports TypeScript 7.
      ignoreDeprecations: "6.0",
    },
  },
  sourcemap: true,
  clean: true,
  minify: true,
});
