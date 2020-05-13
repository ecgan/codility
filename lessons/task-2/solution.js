const getNumberFromBits = (bits) => {
  let num = 0

  for (let i = 0; i < bits.length; i++) {
    num += (bits[i] * Math.pow(-2, i))
  }

  return num
}

const getBitsFromNumber = (number) => {
  if (number === 0) {
    return [0]
  }

  let n = number
  const result = []

  while (n !== 0) {
    result.push(Math.abs(n % -2))
    n = Math.ceil(n / -2)
  }

  return result
}

const solution = (A) => {
  const number = getNumberFromBits(A)
  const bits = getBitsFromNumber(-number)

  return bits
}

module.exports = solution
