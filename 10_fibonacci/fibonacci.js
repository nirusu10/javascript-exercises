const fibonacci = function (num) {
  if (typeof num !== 'number') {
    num = parseInt(num)
  }
  if (num < 0) return 'OOPS'
  if (num === 0) return 0

  let prev = 1
  let prevPrev = 0

  for (let i = 2; i <= num; i++) {
    let current = prevPrev + prev
    prevPrev = prev
    prev = current
  }

  return prev
}

// Do not edit below this line
module.exports = fibonacci
