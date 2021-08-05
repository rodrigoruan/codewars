// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Note: the subarrays should be filled with 1s

function pyramid(n) {
  return [...Array(n).keys()].map((_, idx) => {
    const arr = []
    for (let i = 0; i < idx + 1; i += 1) arr.push(1)
    return arr
  })
}
