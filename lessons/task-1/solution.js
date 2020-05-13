const solution = (S) => {
  let i = 0
  let j = S.length - 1

  while (i <= j) {
    const left = S[i]
    const right = S[j]

    if (left === '(' && right === ')') {
      i++
      j--
    } else if (left === '(' && right !== ')') {
      j--
    } else if (left !== '(' && right === ')') {
      i++
    } else {
      i++
      j--
    }
  }

  return i
}

module.exports = solution
