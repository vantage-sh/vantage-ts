declare const nonEmptyStringBrand: unique symbol;

/** A string that is guaranteed not to contain slashes. Created with {@link pathEncode}. */
export type NoSlashString = string & { readonly __noSlash: unique symbol };

/** Encodes a path segment and brands the result as safe to interpolate into an API path. */
export function pathEncode(value: string): NoSlashString {
  return encodeURIComponent(value) as NoSlashString;
}

/** A string containing at least one non-whitespace character. */
export type NonEmptyString = string & { readonly [nonEmptyStringBrand]: true };

/** Returns whether a string contains at least one non-whitespace character. */
export function isNonEmptyString(value: string): value is NonEmptyString {
  return /\S/.test(value);
}

/** Validates and brands a string containing at least one non-whitespace character. */
export function createNonEmptyString(value: string): NonEmptyString {
  if (!isNonEmptyString(value)) {
    throw new TypeError("Expected a string containing at least one non-whitespace character");
  }

  return value;
}
