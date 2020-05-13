const solution = require('./solution')

test('Example 1', () => {
  // 9
  const A = [1, 0, 0, 1, 1]

  const output = solution(A)

  // -9
  expect(output).toStrictEqual([1, 1, 0, 1])
})

test('Example 2', () => {
  // -23
  const A = [1, 0, 0, 1, 1, 1]

  const output = solution(A)

  // 23
  expect(output).toStrictEqual([1, 1, 0, 1, 0, 1, 1])
})

test('0 should return 0', () => {
  // 0
  const A = [0]

  const output = solution(A)

  // 0
  expect(output).toStrictEqual([0])
})

test('1 should return -1', () => {
  // 1
  const A = [1]

  const output = solution(A)

  // -1
  expect(output).toStrictEqual([1, 1])
})

test('-1 should return 1', () => {
  // -1
  const A = [1, 1]

  const output = solution(A)

  // 0
  expect(output).toStrictEqual([1])
})

test('2 should return -2', () => {
  // 2
  const A = [0, 1, 1]

  const output = solution(A)

  // -2
  expect(output).toStrictEqual([0, 1])
})

test('3 should return -3', () => {
  // 3
  const A = [1, 1, 1]

  const output = solution(A)

  // -3
  expect(output).toStrictEqual([1, 0, 1, 1])
})

test('4 should return -4', () => {
  // 4
  const A = [0, 0, 1]

  const output = solution(A)

  // -4
  expect(output).toStrictEqual([0, 0, 1, 1])
})

test('5 should return -5', () => {
  // 5
  const A = [1, 0, 1]

  const output = solution(A)

  // -5
  expect(output).toStrictEqual([1, 1, 1, 1])
})
