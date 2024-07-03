const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let index = 0
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')

  while (index < cleanedString.length / 2) {
    if (
      cleanedString[index] !== cleanedString[cleanedString.length - index - 1]
    )
      return false
    index++
  }
  return true
}

// Do not edit below this line
module.exports = palindromes
