const DIRECTION = {
  EAST: 0,
  WEST: 1
}

function solution (A) {
  let numEast = 0
  let numPairs = 0

  for (const el of A) {
    if (el === DIRECTION.EAST) {
      numEast++
    } else if (el === DIRECTION.WEST) {
      numPairs += numEast

      if (numPairs > 1000000000) {
        return -1
      }
    }
  }

  return numPairs
}

module.exports = solution
