const solution = require('./solution')

test('Sample - [4, 1, 3, 2] should return 1', () => {
  const A = [4, 1, 3, 2]

  const output = solution(A)

  expect(output).toBe(1)
})

test('Sample - [4, 1, 3] should return 0', () => {
  const A = [4, 1, 3]

  const output = solution(A)

  expect(output).toBe(0)
})

test('[1] should return 1', () => {
  const A = [1]

  const output = solution(A)

  expect(output).toBe(1)
})

test('[1000000000] should return 0', () => {
  const A = [1000000000]

  const output = solution(A)

  expect(output).toBe(0)
})

test('[1, 2, 3] should return 1', () => {
  const A = [1, 2, 3]

  const output = solution(A)

  expect(output).toBe(1)
})

test('[1, 2000, 3] should return 0', () => {
  const A = [1, 2000, 3]

  const output = solution(A)

  expect(output).toBe(0)
})

test('Element occurred more than once - [2, 2, 3, 3] should return 0', () => {
  const A = [2, 2, 3, 3]

  const output = solution(A)

  expect(output).toBe(0)
})
