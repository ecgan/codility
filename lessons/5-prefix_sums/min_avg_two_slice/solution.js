function solution (A) {
  const sums = []

  for (let i = 0; i < A.length - 1; i++) {
    sums.push(A[i] + A[i + 1])
  }

  let idx = 0
  let minSum = sums[0]
  let count = 2

  for (let i = 1; i < sums.length; i++) {
    const sum = sums[i]

    const prevAvg = (minSum) / count
    const curAvg = sum / 2

    if (curAvg < prevAvg) {
      minSum = sum
      count = 2
      idx = i
    }
  }

  return idx
}

module.exports = solution
