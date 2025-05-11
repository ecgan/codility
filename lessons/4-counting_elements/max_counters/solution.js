function solution (N, A) {
  const result = new Array(N)

  let base = 0
  let max = 0
  for (let i = 0; i < A.length; i++) {
    const X = A[i]

    if (X <= N) {
      result[X - 1] = Math.max(base, result[X - 1] || 0) + 1
      max = Math.max(max, result[X - 1])
    } else if (X === N + 1) {
      base = max
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = Math.max(base, result[i] || base)
  }

  return result
}

module.exports = solution
