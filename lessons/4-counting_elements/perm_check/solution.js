function solution (A) {
  const occurred = new Set()

  for (let i = 0; i < A.length; i++) {
    const el = A[i]

    // early exit when element is bigger than A.length.
    if (el > A.length) {
      return 0
    }

    occurred.add(el)
  }

  return occurred.size === A.length ? 1 : 0
}

module.exports = solution
