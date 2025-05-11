const solution = require('./solution')

test('Sample - [1, 3, 6, 4, 1, 2] should return 5', () => {
  const A = [1, 3, 6, 4, 1, 2]

  const output = solution(A)

  expect(output).toBe(5)
})

test('Sample -  [1, 2, 3] should return 4', () => {
  const A = [1, 2, 3]

  const output = solution(A)

  expect(output).toBe(4)
})

test('Sample - [-1, -3] should return 1', () => {
  const A = [-1, -3]

  const output = solution(A)

  expect(output).toBe(1)
})

test('[0] should return 1', () => {
  const A = [0]

  const output = solution(A)

  expect(output).toBe(1)
})

test('[1] should return 2', () => {
  const A = [1]

  const output = solution(A)

  expect(output).toBe(2)
})

test('[2] should return 1', () => {
  const A = [2]

  const output = solution(A)

  expect(output).toBe(1)
})
