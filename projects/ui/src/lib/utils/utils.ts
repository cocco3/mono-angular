export function uniqueId() {
  return `i${Math.random().toString(36).substring(2, 15)}`;
}

export function getInitials(...names: (string | undefined)[]) {
  return names
    .filter((x) => x !== undefined && x.trim() !== '')
    .join(' ')
    .split(' ')
    .map((x) => x.trim().charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
}
