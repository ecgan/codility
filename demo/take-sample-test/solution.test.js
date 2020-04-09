const solution = require('./solution')

test('should return 6', () => {
  const input = [5, 4, 3, 2, 1]

  const output = solution(input)

  expect(output).toBe(6)
})

test('should return 1', () => {
  const input = [5, 4, 3, 2]

  const output = solution(input)

  expect(output).toBe(1)
})
