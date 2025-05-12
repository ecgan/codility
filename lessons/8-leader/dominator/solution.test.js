const solution = require('./solution')

test('Sample - [3, 4, 3, 2, 3, -1, 3, 3] should return 0', () => {
  const A = [3, 4, 3, 2, 3, -1, 3, 3]

  const output = solution(A)

  expect(output).toBe(0)
})

test('No denominator - [1, 2, 3] should return -1', () => {
  const A = [1, 2, 3]

  const output = solution(A)

  expect(output).toBe(-1)
})

test('Occurred no more than half - [2, 2, 3, 3] should return -1', () => {
  const A = [2, 2, 3, 3]

  const output = solution(A)

  expect(output).toBe(-1)
})

test('Empty array - [] should return -1', () => {
  const A = []

  const output = solution(A)

  expect(output).toBe(-1)
})
