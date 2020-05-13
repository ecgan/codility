const solution = require('./solution')

test('(()) should return 2', () => {
  const S = '(())'

  const output = solution(S)

  expect(output).toBe(2)
})

test('(())))( should return 4', () => {
  const S = '(())))('

  const output = solution(S)

  expect(output).toBe(4)
})

test('() should return 1', () => {
  const S = '()'

  const output = solution(S)

  expect(output).toBe(1)
})

test(')( should return 1', () => {
  const S = ')('

  const output = solution(S)

  expect(output).toBe(1)
})

test('Empty string should return 0', () => {
  const S = ''

  const output = solution(S)

  expect(output).toBe(0)
})

test('( should return 0', () => {
  const S = '('

  const output = solution(S)

  expect(output).toBe(0)
})

test(') should return 1', () => {
  const S = ')'

  const output = solution(S)

  expect(output).toBe(1)
})
