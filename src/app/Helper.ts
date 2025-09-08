export function splitIntoNChunks(arr: any[], n: number) {
  const chunkSize = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) =>
    arr.slice(i * chunkSize, (i + 1) * chunkSize),
  ).filter((chunk) => chunk.length > 0);
}
