const solution = require('./solution')

test('Sample: (6, 11, 2) should return 3', () => {
  const A = 6
  const B = 11
  const K = 2

  const output = solution(A, B, K)

  expect(output).toBe(3)
})

test('(0, 2000000000, 1) should return 2000000001', () => {
  const A = 0
  const B = 2000000000
  const K = 1

  const output = solution(A, B, K)

  expect(output).toBe(2000000001)
})

test('(0, 2000000000, 2000000000) should return 2', () => {
  const A = 0
  const B = 2000000000
  const K = 2000000000

  const output = solution(A, B, K)

  expect(output).toBe(2)
})

test('(4, 5, 3) should return 0', () => {
  const A = 4
  const B = 5
  const K = 3

  const output = solution(A, B, K)

  expect(output).toBe(0)
})
