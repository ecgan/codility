const solution = require('./solution')

test('Sample - [9, 3, 9, 3, 9, 7, 9] should return 7', () => {
  const A = [9, 3, 9, 3, 9, 7, 9]

  const output = solution(A)

  expect(output).toBe(7)
})

test('[9] should return 9', () => {
  const A = [9]

  const output = solution(A)

  expect(output).toBe(9)
})

test('[1000000000, 1, 1000000000] should return 1', () => {
  const A = [9, 1, 9]

  const output = solution(A)

  expect(output).toBe(1)
})

test('[1000000000, 1, 1] should return 1000000000', () => {
  const A = [1000000000, 1, 1]

  const output = solution(A)

  expect(output).toBe(1000000000)
})
