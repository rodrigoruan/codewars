// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const obj = {}
  A.forEach((num) => (obj[num] ? (obj[num] += 1) : (obj[num] = 1)))
  return +Object.entries(obj).find((num) => num[1] % 2 !== 0)[0]
}
