const solution = require('./solution')

test('Sample: [4, 2, 2, 5, 1, 5, 8] should return 1', () => {
  const A = [4, 2, 2, 5, 1, 5, 8]

  const output = solution(A)

  expect(output).toBe(1)
})

test('Sample: [4, 2, 2, 5, 1, 5, 8] should return 1', () => {
  const A = [10, 11, -20, 5]

  const output = solution(A)

  expect(output).toBe(2)
})
