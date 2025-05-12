const solution = require('./solution')

test('Sample - [4, 3, 4, 4, 4, 2] should return 2', () => {
  const A = [4, 3, 4, 4, 4, 2]

  const output = solution(A)

  expect(output).toBe(2)
})

test('N is 1, has leader but cannot split - [4] should return 0', () => {
  const A = [4]

  const output = solution(A)

  expect(output).toBe(0)
})

test('N is 2, has leader and can split - [4, 4] should return 1', () => {
  const A = [4, 4]

  const output = solution(A)

  expect(output).toBe(1)
})

test('N is 3, has leader and can split - [4, 4, 4] should return 2', () => {
  const A = [4, 4, 4]

  const output = solution(A)

  expect(output).toBe(2)
})

test('N is 4, has leader and can split - [4, 4, 4, 4] should return 3', () => {
  const A = [4, 4, 4, 4]

  const output = solution(A)

  expect(output).toBe(3)
})

test('No leader - [2, 2, 3, 3] should return 0', () => {
  const A = [2, 2, 3, 3]

  const output = solution(A)

  expect(output).toBe(0)
})
