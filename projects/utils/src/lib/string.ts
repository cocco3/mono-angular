/**
 * Checks if a given string starts with any of the specified prefixes.
 *
 * @param {string} str - The string to evaluate.
 * @param {string[]} prefixes - An array of prefix strings to test against.
 * @returns {boolean} True if the string starts with at least one of the prefixes, otherwise false.
 *
 * @example
 * startsWithAny("hello world", ["hi", "hello", "hey"]); // returns true
 * startsWithAny("goodbye", ["hi", "hello", "hey"]);     // returns false
 */
export function startsWithAny(str: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => str.startsWith(prefix));
}
