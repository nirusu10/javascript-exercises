const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('')
  for (let i = 0; i <= cleanedString.length / 2; i++) {
    if (
      cleanedString.charAt(i) !==
      cleanedString.charAt(cleanedString.length - 1 - i)
    )
      return false
  }
  return true
}

// Do not edit below this line
module.exports = palindromes
