const solution = require('./solution')

test('Sample - [3, 2, -6, 4, 0] should return 5', () => {
  const A = [3, 2, -6, 4, 0]

  const output = solution(A)

  expect(output).toBe(5)
})

test('From reading material - [5, -7, 3, 5, -2, 4, -1] should return 10', () => {
  const A = [5, -7, 3, 5, -2, 4, -1]

  const output = solution(A)

  expect(output).toBe(10)
})

test('One element: [7] should return 7', () => {
  const A = [7]

  const output = solution(A)

  expect(output).toBe(7)
})

test('Three elements: [1, 2, 3] should return 6', () => {
  const A = [1, 2, 3]

  const output = solution(A)

  expect(output).toBe(6)
})

test('One element negative: [-10] should return -10', () => {
  const A = [-10]

  const output = solution(A)

  expect(output).toBe(-10)
})

test('Three elements: [-1, -2, -3] should return -1', () => {
  const A = [-1, -2, -3]

  const output = solution(A)

  expect(output).toBe(-1)
})
