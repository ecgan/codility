function solution (A) {
  A.sort((a, b) => a - b)

  let firstZeroIdx = -1
  for (let i = 0; i < A.length; i++) {
    const el = A[i]
    if (el === 0) {
      if (firstZeroIdx === -1) {
        firstZeroIdx = i
      }
    }
  }

  const firstIdx = 0
  const lastIdx = A.length - 1

  let maxProduct = Number.MIN_SAFE_INTEGER

  // TODO: simplify the logic below.

  // for +++.
  maxProduct = Math.max(maxProduct, A[lastIdx - 2] * A[lastIdx - 1] * A[lastIdx])

  // for --+.
  maxProduct = Math.max(maxProduct, A[firstIdx] * A[firstIdx + 1] * A[lastIdx])

  // for ---.
  maxProduct = Math.max(maxProduct, A[firstIdx] * A[firstIdx + 1] * A[firstIdx + 2])

  if (firstZeroIdx >= 2) {
    maxProduct = Math.max(maxProduct, A[firstZeroIdx - 2] * A[firstZeroIdx - 1] * A[lastIdx])
  }

  if (firstZeroIdx >= 3) {
    maxProduct = Math.max(maxProduct, A[firstZeroIdx - 3] * A[firstZeroIdx - 2] * A[firstZeroIdx - 1])
  }

  return maxProduct
}

module.exports = solution
