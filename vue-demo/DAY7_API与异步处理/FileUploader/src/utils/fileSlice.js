/**
 * 将文件按指定大小进行分片
 * @param {File} file - 需要分片的文件对象
 * @param {number} chunkSize - 每个分片的大小（字节），如2MB=2*1024*1024
 * @returns {Array} 分片数组，每个元素为Blob对象
 */
export function sliceFile(file, chunkSize = 2 * 1024 * 1024) {
  const chunks = [];
  let cur = 0;
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + chunkSize));
    cur += chunkSize;
  }
  return chunks;
}
