function fizzbuzz(n) {
    return new Array(n).fill(undefined).map((value,index)=>{
       return FizzbuzzFunction(index+1)
    })
}


function FizzbuzzFunction(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0 || n.toString().split("").includes("3")) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return `${n}`;
  }
}


module.exports = { FizzbuzzFunction,fizzbuzz };
