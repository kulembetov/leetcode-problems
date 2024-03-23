/* 
time complexity: O(n*k), where n is the number of strings and k is the maximum length of a string,
this complexity arises because we iterate over each character of each string to count character frequencies, 
which is linear with respect to the string length, and we do this for each string in the input array

space complexity: O(n*k), because the extra space is used for the hash table and the count arrays
*/

const groupAnagramsCharCount = (strs: string[]): string[][] => {
  // initialize an object to act as a map for grouping anagrams
  const map: { [key: string]: string[] } = {};

  // iterate through each string in the input array
  for (const str of strs) {
    // initialize a count array to store the frequency of each letter
    const count = new Array(26).fill(0);
    for (const char of str) {
      // increment the count for the current character
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // create a key from the count array by joining its elements with a separator
    const key = count.join('#');

    // if the key doesn't exist in the map, initialize the value as an empty array
    if (!map[key]) {
      map[key] = [];
    }
    // add the current string to the array associated with the key in the map
    map[key].push(str);
  }

  // return the values of the map as an array of arrays
  return Object.values(map);
};
