// Performance: O(n) where n is the size of array A.
function solution (A) {
  const occurred = new Set()

  A.forEach(el => {
    if (occurred.has(el)) {
      occurred.delete(el)
    } else {
      occurred.add(el)
    }
  })

  // There should be only one value in the `occurred` set.
  return occurred.values().next().value
}

module.exports = solution
