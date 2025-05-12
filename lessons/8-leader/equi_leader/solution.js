const findLeaderElement = (A) => {
  const map = new Map()
  let leader

  for (let i = 0; i < A.length; i++) {
    const el = A[i]
    const count = (map.get(el) || 0) + 1
    map.set(el, count)

    if (count > A.length / 2) {
      leader = {
        element: el,
        count
      }
    }
  }

  return leader
}

function solution (A) {
  const leader = findLeaderElement(A)

  if (!leader) {
    return 0
  }

  const { element, count } = leader
  let numEquiLeaders = 0
  let aCount = 0
  let bCount = count

  for (let i = 0; i < A.length; i++) {
    const el = A[i]

    if (el === element) {
      aCount++
      bCount--

      const aLength = i + 1
      const bLength = A.length - aLength
      if (aCount > aLength / 2 && bCount > bLength / 2) {
        numEquiLeaders++
      }
    }
  }

  return numEquiLeaders
}

module.exports = solution
