function solution (A) {
  if (A.length < 2) {
    return 0
  }

  let lowestPrice = A[0]
  let maxProfit = 0

  for (let i = 1; i < A.length; i++) {
    lowestPrice = Math.min(lowestPrice, A[i])
    maxProfit = Math.max(maxProfit, A[i] - lowestPrice)
  }

  return maxProfit
}

module.exports = solution
