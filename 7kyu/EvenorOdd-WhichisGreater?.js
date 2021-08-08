// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
  const evens = str.split('').filter(num => num % 2 === 0).reduce((a, b) => a + Number(b), 0)
  const odds = str.split('').filter(num => num % 2 !== 0).reduce((a, b) => a + Number(b), 0)

  if(evens === odds) return "Even and Odd are the same"
  return evens > odds ?
    "Even is greater than Odd" : "Odd is greater than Even"
}