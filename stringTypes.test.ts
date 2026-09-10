import { expect, expectTypeOf, test } from "vitest";
import { createNonEmptyString, isNonEmptyString, type NoSlashString, pathEncode } from "./stringTypes";

test("path encoding returns a branded string without literal slashes", () => {
  const encoded = pathEncode("folder/token");

  expect(encoded).toBe("folder%2Ftoken");
  expectTypeOf(encoded).toMatchTypeOf<NoSlashString>();
});

test("non-empty strings require a non-whitespace character", () => {
  expect(isNonEmptyString("owner")).toBe(true);
  expect(isNonEmptyString("")).toBe(false);
  expect(isNonEmptyString(" \t\n")).toBe(false);
  expect(createNonEmptyString(" owner ")).toBe(" owner ");
  expect(() => createNonEmptyString("")).toThrow(TypeError);
  expect(() => createNonEmptyString(" \t\n")).toThrow(TypeError);
});
