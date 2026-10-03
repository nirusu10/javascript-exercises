const fibonacci = function(n) {
   
    if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) {
        return "OOPS";
    }

    if (n === 0) return 0;

    let prevPrev = 0;
    let prev = 1;

    for (let i = 2; i <= n; i++) {
        let current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return prev;

};

// Do not edit below this line
module.exports = fibonacci;