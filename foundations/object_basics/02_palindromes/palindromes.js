const palindromes = function (string) {
    const trimmedString = string.replace(/[^A-Z0-9]/ig, "").trim().toLowerCase();
    for (let i = 0; i <= trimmedString.length / 2; i++) {
        if (trimmedString[i] !== trimmedString[trimmedString.length - i - 1]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
