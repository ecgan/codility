// Performance: O(1) since we are not doing any loop based on A.length or K values.
function solution (A, K) {
  const times = K % A.length

  // Note that we are mutating Array A here by calling `array.splice`.
  const removed = A.splice(A.length - times)

  return [...removed, ...A]
}

module.exports = solution
