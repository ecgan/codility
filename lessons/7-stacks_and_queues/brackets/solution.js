
const isOpenBracket = (char) => {
  return ['(', '{', '['].includes(char)
}

const isMatchingBrackets = (a, b) => {
  return (
    (a === '(' && b === ')') ||
    (a === '{' && b === '}') ||
    (a === '[' && b === ']')
  )
}

function solution (S) {
  const stack = []

  for (let i = 0; i < S.length; i++) {
    const char = S[i]
    const stackLastChar = stack[stack.length - 1]

    if (isMatchingBrackets(stackLastChar, char)) {
      stack.pop()
    } else if (isOpenBracket(char)) {
      stack.push(char)
    } else {
      // char is a close bracket and
      // it does not match with the last char in the stack.
      return 0
    }
  }

  return stack.length ? 0 : 1
}

module.exports = solution
