/*
time complexity: O(n*k*log(k)) - where n is the number of strings in the input array,
and k is the maximum length of a string in the array, this is because we sort each string individually
which takes O(k*log(k)) time and we do this for each of the n strings

space complexity: O(n*k) - because the extra space required depends on the number of items stored
in the hash table, which stores at most n elements, and the space required to store sorted strings,
which in the worst case requires k space per string
*/

const groupAnagramsMap = (strs: string[]): string[][] => {
  // initialize a map to store groups of anagrams
  const map = new Map<string, string[]>();

  // iterate through each string in the input array
  for (const str of strs) {
    // sort the characters of the string to form a key
    const key = str.split('').sort().join('');

    if (map.has(key)) {
      // if the key exists, append the current string to its group
      map.get(key)!.push(str);
    } else {
      // otherwise, create a new group with the current string
      map.set(key, [str]);
    }
  }
  // convert the map values to an array of arrays and return
  return Array.from(map.values());
};
