function solution (A) {
  A.sort((a, b) => a - b)

  return Math.max(
    Number.MIN_SAFE_INTEGER,
    A[0] * A[1] * A[2],
    A[0] * A[1] * A[A.length - 1],
    A[A.length - 3] * A[A.length - 2] * A[A.length - 1]
  )
}

module.exports = solution
