// time complexity: o(n) where n is the number of digits in the input number
// space complexity: o(1), as we use a constant amount of extra space

export const numberToWords = (num: number): string => {
  // handle the special case for zero
  if (num === 0) return 'Zero';

  // arrays to map numbers to their word equivalents
  const belowTwenty = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];

  // helper function to convert numbers less than 1000 to words
  const helper = (num: number): string => {
    // return an empty string for zero (no contribution)
    if (num === 0) return '';

    // map numbers less than 20 directly
    if (num < 20) return belowTwenty[num] + ' ';

    // handle tens and units
    if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);

    // handle hundreds
    return belowTwenty[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
  };

  // initialize the result string
  let result = '';

  // index for tracking the thousands place
  let i = 0;

  // loop through each group of three digits
  while (num > 0) {
    // if the current three digits are non-zero, convert and append to result
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + ' ' + result;
    }

    // move to the next set of three digits
    num = Math.floor(num / 1000);

    // increment the thousands place index
    i++;
  }

  // remove any trailing spaces and return the result
  return result.trim();
};
