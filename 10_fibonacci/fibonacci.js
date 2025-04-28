const fibonacci = function (num) {
  let number = parseInt(num)

  if (typeof number !== 'number' || number < 0) return 'OOPS'
  if (number === 0) return 0

  let prevPrev = 0
  let prev = 1

  for (let i = 2; i <= number; i++) {
    let current = prev + prevPrev
    prevPrev = prev
    prev = current
  }

  return prev
}

// Do not edit below this line
module.exports = fibonacci
