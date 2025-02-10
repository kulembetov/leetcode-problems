const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

// function compose(...funcs) {
//   return (...args) => funcs.reduceRight((acc, fn) => (Array.isArray(acc) ? fn(...acc) : fn(acc)), args);
// }

function compose(...funcs) {
  return (...args) => {
    return funcs.reduceRight((acc, fn) => fn(acc), args[0]);
  }
}

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));