const solution = require('./solution')

test('Sample: [23171, 21011, 21123, 21366, 21013, 21367] should return 356', () => {
  const A = [23171, 21011, 21123, 21366, 21013, 21367]

  const output = solution(A)

  expect(output).toBe(356)
})

test('Empty array: [] returns 0', () => {
  const A = []

  const output = solution(A)

  expect(output).toBe(0)
})

test('One element: [123] returns 0', () => {
  const A = [123]

  const output = solution(A)

  expect(output).toBe(0)
})

test('Two elements with positive profit: [123, 128] returns 5', () => {
  const A = [123, 128]

  const output = solution(A)

  expect(output).toBe(5)
})

test('Two elements with loss: [123, 120] returns 0', () => {
  const A = [123, 120]

  const output = solution(A)

  expect(output).toBe(0)
})
