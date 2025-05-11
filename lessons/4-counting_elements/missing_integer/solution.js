function solution (A) {
  const positives = new Set()
  for (let i = 0; i < A.length; i++) {
    positives.add(i + 1)
  }

  for (let i = 0; i < A.length; i++) {
    positives.delete(A[i])
  }

  return positives.values().next().value || A.length + 1
}

module.exports = solution
