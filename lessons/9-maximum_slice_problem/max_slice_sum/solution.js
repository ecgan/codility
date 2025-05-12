// TODO:
// This solution is based on reading material (https://codility.com/media/train/7-MaxSlice.pdf),
// but doesn't seem to be working.
function solution (A) {
  let maxEnding = 0
  let maxSlice = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < A.length; i++) {
    maxEnding = Math.max(Number.MIN_SAFE_INTEGER, maxEnding + A[i])
    maxSlice = Math.max(maxSlice, maxEnding)
  }

  return maxSlice
}

module.exports = solution
