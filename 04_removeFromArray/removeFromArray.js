const removeFromArray = function (array, ...args) {
  const resultArray = []
  array.forEach((item) => {
    if (!args.includes(item)) resultArray.push(item)
  })
  return resultArray
}

// Do not edit below this line
module.exports = removeFromArray
