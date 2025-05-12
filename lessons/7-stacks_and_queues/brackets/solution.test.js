const solution = require('./solution')

test('Sample - "{[()()]}" should return 1', () => {
  const S = '{[()()]}'

  const output = solution(S)

  expect(output).toBe(1)
})

test('Sample - "([)()]" should return 0', () => {
  const S = '([)()]'

  const output = solution(S)

  expect(output).toBe(0)
})

test('Empty string "" should return 1', () => {
  const S = ''

  const output = solution(S)

  expect(output).toBe(1)
})

test('Form (U) "({})" should return 1', () => {
  const S = '({})'

  const output = solution(S)

  expect(output).toBe(1)
})

test('Form VW "(){}" should return 1', () => {
  const S = '(){}'

  const output = solution(S)

  expect(output).toBe(1)
})

test('"(()" should return 0', () => {
  const S = '(()'

  const output = solution(S)

  expect(output).toBe(0)
})
