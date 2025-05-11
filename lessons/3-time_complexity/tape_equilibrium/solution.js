function solution (A) {
  const wholeSum = A.reduce((acc, cur) => {
    return acc + cur
  }, 0)

  let leftSum = 0
  let rightSum = wholeSum
  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < A.length; i++) {
    leftSum += A[i - 1]
    rightSum -= A[i - 1]

    minDiff = Math.min(minDiff, Math.abs(rightSum - leftSum))
  }

  return minDiff
}

module.exports = solution
