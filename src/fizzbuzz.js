function fizzBuzz(n) {
    const charArr = [];
    for (let i = n; i >= 1; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            charArr.push('fizzbuzz')
        }
        else if (i % 3 === 0 || i.toString(10).split('').includes('3')) {
            charArr.push('fizz')
        }
        else if (i % 5 === 0) {
            charArr.push('buzz')
        }
        else {
            charArr.push(`${i}`)
        }
    }
    return charArr.reverse();
}

module.exports.fizzBuzz = fizzBuzz;