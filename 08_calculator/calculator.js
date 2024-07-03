const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

const multiply = function (numbers) {
  if (numbers.length < 2) {
    return 'ERROR'
  }
  let product = 1

  for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i]
  }

  return product
}

const power = function (base, exponent) {
  return Math.pow(base, exponent)
}

const factorial = function (num) {
  if (num === 0 || num === 1) return 1
  let product = 1
  for (let i = 1; i <= num; i++) {
    product = product * i
  }
  return product
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
