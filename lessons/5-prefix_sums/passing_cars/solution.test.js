const solution = require('./solution')

test('Sample: [0, 1, 0, 1, 1] should return 5', () => {
  const A = [0, 1, 0, 1, 1]

  const output = solution(A)

  expect(output).toBe(5)
})

test('One element: [0] should return 0', () => {
  const A = [0]

  const output = solution(A)

  expect(output).toBe(0)
})

test('Two elements: [0, 1] should return 1', () => {
  const A = [0, 1]

  const output = solution(A)

  expect(output).toBe(1)
})

test('Two elements: [1, 0] should return 0', () => {
  const A = [1, 0]

  const output = solution(A)

  expect(output).toBe(0)
})

test('Large pairs exceeding 1000000000: should return -1', () => {
  const east = new Array(50000)
  east.fill(0)
  const west = new Array(50000)
  west.fill(1)
  const A = [...east, ...west]

  const output = solution(A)

  expect(output).toBe(-1)
})
