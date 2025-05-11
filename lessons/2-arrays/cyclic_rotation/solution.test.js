const solution = require('./solution')

test('([3, 8, 9, 7, 6], 3) should return [9, 7, 6, 3, 8]', () => {
  const A = [3, 8, 9, 7, 6]
  const K = 3

  const output = solution(A, K)

  expect(output).toStrictEqual([9, 7, 6, 3, 8])
})

test('([0, 0, 0], 1) should return [0, 0, 0]', () => {
  const A = [0, 0, 0]
  const K = 1

  const output = solution(A, K)

  expect(output).toStrictEqual([0, 0, 0])
})

test('([1, 2, 3, 4], 4) should return [1, 2, 3, 4]', () => {
  const A = [1, 2, 3, 4]
  const K = 4

  const output = solution(A, K)

  expect(output).toStrictEqual([1, 2, 3, 4])
})

test('Empty array ([], 5) should return []', () => {
  const A = []
  const K = 5

  const output = solution(A, K)

  expect(output).toStrictEqual([])
})

test('One element array ([4], 5) should return [4]', () => {
  const A = [4]
  const K = 5

  const output = solution(A, K)

  expect(output).toStrictEqual([4])
})

test('A.length smaller than K - ([1, 2, 3, 4, 5, 6, 7], 10) should return [5, 6, 7, 1, 2, 3, 4]', () => {
  const A = [1, 2, 3, 4, 5, 6, 7]
  const K = 10

  const output = solution(A, K)

  expect(output).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})
