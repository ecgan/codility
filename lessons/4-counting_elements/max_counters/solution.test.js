const solution = require('./solution')

test('Sample - (5, [3, 4, 4, 6, 1, 4, 4]) should return [3, 2, 2, 4, 2]', () => {
  const N = 5
  const A = [3, 4, 4, 6, 1, 4, 4]

  const output = solution(N, A)

  expect(output).toStrictEqual([3, 2, 2, 4, 2])
})

test('One counter with one increase operation - (1, [1]) should return [1]', () => {
  const N = 1
  const A = [1]

  const output = solution(N, A)

  expect(output).toStrictEqual([1])
})

test('One counter with one max counter operation - (1, [2]) should return [0]', () => {
  const N = 1
  const A = [2]

  const output = solution(N, A)

  expect(output).toStrictEqual([0])
})

test('Performance with max N and M at 100000 with many max counter operations', () => {
  const N = 100000

  /**
   * A is an array of [1, 2, 3, 4, 5, 100001, 100001, ...]
   */
  const A = new Array(100000)
  A.fill(1)
  A[99999] = 100001

  const output = solution(N, A)

  /**
   * expected is an array of [5, 5, 5, ...] with 100000 elements.
   */
  const expected = new Array(100000)
  expected.fill(99999)

  expect(output).toStrictEqual(expected)
})
