const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (numArray) {
  return numArray.reduce((sum, current) => sum + current, 0)
}

const multiply = function (numArray) {
  return numArray.reduce((product, current) => product * current, 1)
}

const power = function (base, exp) {
  return Math.pow(base, exp)
}

const factorial = function (num) {
  let product = 1
  for (let i = num; i > 1; i--) {
    product *= i
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
