// time complexity: O(n), where n is the number of items in the bill array
// space complexity: O(1), only a few extra variables are used

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

export const bonAppetit = (bill: number[], k: number, b: number): void => {
  const totalBill = bill.reduce((acc, curr) => acc + curr, 0);
  const annaShare = (totalBill - bill[k]) / 2;

  if (annaShare === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - annaShare);
  }
};
