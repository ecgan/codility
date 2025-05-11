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
