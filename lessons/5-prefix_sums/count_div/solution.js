function solution (A, B, K) {
  /**
   * The first multiple of K that is equal or greater than A.
   *
   * Note that A may be greater than B,
   * e.g. when the function is called with (4, 5, 3), K would be 6.
   */
  const first = Math.ceil(A / K) * K

  /**
   * The difference or range between `B` and `first`.
   *
   * When `first` is greater than `B`, `range` would be negative.
   * e.g. when the function is called with (4, 5, 3),
   * `range` would be -1.
   */
  const range = B - first

  /**
   * The number of multiples within `range`.
   *
   * When `range` is negative value, `count` here would be `-1`.
   */
  const count = Math.floor(range / K)

  return count + 1
}

module.exports = solution
