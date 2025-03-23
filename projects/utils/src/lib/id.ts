export function uniqueId() {
  return `i${Math.random().toString(36).substring(2, 15)}`;
}
