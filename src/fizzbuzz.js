function fizzBuzz(n) {
    const charArr = [];
    for (let i = 1; i <= n; i++) {
       const solution= fizzbuzzFn(i)
       charArr.push(solution)
    }
    return charArr;
}

function fizzbuzzFn(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'fizzbuzz';
    }
    else if (i % 3 === 0 || i.toString(10).split('').includes('3')) {
        return 'fizz';
    }
    else if (i % 5 === 0) {
        return 'buzz';
    }
    else {
        return `${i}`;
    }


}
module.exports = {fizzBuzz, fizzbuzzFn};