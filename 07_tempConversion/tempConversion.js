const convertToCelsius = function (tempInF) {
  return roundToOne(((tempInF - 32) * 5) / 9)
}

const convertToFahrenheit = function (tempInC) {
  return roundToOne((tempInC * 9) / 5 + 32)
}

const roundToOne = function (number) {
  return Math.round(number * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
