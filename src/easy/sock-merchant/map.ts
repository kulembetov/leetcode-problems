// time complexity: O(n), as we iterate through the initial array and map of socks exactly once.
// space complexity: O(n), the size of the map depends on the input array's size.

export const sockMerchant = (arr: number[]): number => {
  let sockMap = new Map<number, number>();
  let pairs = 0;

  arr.forEach((sock) => {
    if (sockMap.has(sock)) {
      sockMap.set(sock, sockMap.get(sock)! + 1);
    } else {
      sockMap.set(sock, 1);
    }
  });

  sockMap.forEach((count) => {
    pairs += Math.floor(count / 2);
  });

  return pairs;
};
