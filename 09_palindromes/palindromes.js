const palindromes = function (string) {
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((c) => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(c))
    .join('')
  let start = 0
  let end = cleanedString.length - 1
  while (end > start) {
    if (cleanedString[start] !== cleanedString[end]) return false
    start++
    end--
  }
  return true
}

// Do not edit below this line
module.exports = palindromes
