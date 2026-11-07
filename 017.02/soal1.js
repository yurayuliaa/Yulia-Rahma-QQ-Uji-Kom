function samaArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  return a.every((nilai, i) => nilai === b[i]);
}

console.log(samaArray([1, 2, 3], [1, 2, 3])); // true
console.log(samaArray([1, 2, 3], [1, 3, 2])); // false