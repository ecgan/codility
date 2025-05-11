function solution (N, A) {
  const result = new Array(N)
  result.fill(0)

  let max = 0
  for (let i = 0; i < A.length; i++) {
    const X = A[i]

    if (X <= N) {
      result[X - 1] += 1
      max = Math.max(max, result[X - 1])
    } else if (X === N + 1) {
      result.fill(max)
    }
  }

  return result
}

module.exports = solution
