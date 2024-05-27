// time complexity: o(log(n)) due to each digit is processed once
// space complexity: o(1) because of constant space usage

// reverse a signed 32-bit integer's digits
// return 0 if the reversed integer overflows 32-bit range

export const reverse = (x: number): number => {
  // minimum 32-bit signed integer
  const INT_MIN = -(2 ** 31);
  // maximum 32-bit signed integer
  const INT_MAX = 2 ** 31 - 1;

  // variable to store the reversed number
  let reversed = 0;
  // make the number positive for uniform processing
  let num = Math.abs(x);

  while (num !== 0) {
    // extract the last digit
    const digit = num % 10;
    // remove the last digit from the number
    num = Math.floor(num / 10);

    // check for overflow before updating reversed
    if (reversed > (INT_MAX - digit) / 10) {
      // return 0 if overflow occurs
      return 0;
    }

    // update reversed with the extracted digit
    reversed = reversed * 10 + digit;
  }

  // return reversed with the correct sign
  return x < 0 ? -reversed : reversed;
};
