const convertToCelsius = function(temp) {
  const preciseTemperature = (temp - 32) *  5 / 9;
  return roundToOneDecimal(preciseTemperature);
};

const convertToFahrenheit = function(temp) {
  const preciseTemperature = temp * 9 / 5 + 32;
  return roundToOneDecimal(preciseTemperature);
};

const roundToOneDecimal = function(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
