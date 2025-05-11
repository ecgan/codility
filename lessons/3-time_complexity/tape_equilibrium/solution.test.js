const solution = require('./solution')

test('Sample - [3, 1, 2, 4, 3] should return 1 (at P=3)', () => {
  const A = [3, 1, 2, 4, 3]

  const output = solution(A)

  expect(output).toBe(1)
})

test('N is at minimum 2 - [3, 10] should return 7 (at P=1)', () => {
  const A = [3, 10]

  const output = solution(A)

  expect(output).toBe(7)
})

test('Negative values - [-3, -1, -2, -4, -3] should return 1 (at P=3)', () => {
  const A = [-3, -1, -2, -4, -3]

  const output = solution(A)

  expect(output).toBe(1)
})
