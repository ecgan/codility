const solution = require('./solution')

test('Sample - [-3, 1, 2, - 2, 5, 6] should return 60', () => {
  const A = [-3, 1, 2, -2, 5, 6]

  const output = solution(A)

  expect(output).toBe(60)
})

test('[0, 0, 0] should return 0', () => {
  const A = [0, 0, 0]

  const output = solution(A)

  expect(output).toBe(0)
})

test('[0, 1, 2] should return 0', () => {
  const A = [0, 1, 2]

  const output = solution(A)

  expect(output).toBe(0)
})

test('[0, 1, 2, 3] should return 6', () => {
  const A = [0, 1, 2, 3]

  const output = solution(A)

  expect(output).toBe(6)
})

test('[-4, -3, -2, -1] should return -6', () => {
  const A = [-4, -3, -2, -1]

  const output = solution(A)

  expect(output).toBe(-6)
})

test('[-4, -3, -2, -1, 0] should return 0', () => {
  const A = [-4, -3, -2, -1, 0]

  const output = solution(A)

  expect(output).toBe(0)
})

test('[-4, -3, -2, 0, 2, 3, 4] should return 48', () => {
  const A = [-4, -3, -2, 0, 2, 3, 4]

  const output = solution(A)

  expect(output).toBe(48)
})

test('[-3, -2, 0, 2, 3] should return 18', () => {
  const A = [-3, -2, 0, 2, 3]

  const output = solution(A)

  expect(output).toBe(18)
})
