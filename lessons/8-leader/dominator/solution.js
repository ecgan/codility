function solution (A) {
  const map = {}

  for (let i = 0; i < A.length; i++) {
    const el = A[i]

    if (!map[el]) {
      map[el] = {
        idx: i,
        count: 1
      }
    } else {
      map[el] = {
        ...map[el],
        count: ++map[el].count
      }
    }

    if (map[el].count > A.length / 2) {
      return map[el].idx
    }
  }

  return -1
}

module.exports = solution
