// time complexity: O(n), n = total characters in all strings
// space complexity: O(n), for the encoded string
const encode = (strs: string[]): string => {
  let encodedString = "";

  // iterate through each string in the array
  for (let str of strs) {
    // append length, separator, string, and comma
    encodedString += str.length + "|" + str + ",";
  }
  // remove the last comma for a cleaner format
  return encodedString.slice(0, -1);
};

// time complexity: O(n), n = length of the encoded string
// space complexity: O(m), m = total length of all decoded strings
const decode = (s: string): string[] => {
  let decodedStrings: string[] = [];
  // current index in the encoded string
  let i = 0;

  // loop until the end of the encoded string
  while (i < s.length) {
    // find the next separator to determine the end of the length segment
    let separatorIndex = s.indexOf("|", i);
    if (separatorIndex !== -1) {
      // parse the length of the next string
      let length = parseInt(s.substring(i, separatorIndex));
      // move index to the start of the actual string
      i = separatorIndex + 1;
      // extract the string based on the parsed length
      let str = s.substring(i, i + length);
      // add the string to the decoded array
      decodedStrings.push(str);
      // update index to move past the current string and the comma separator, including comma
      i += length + 1;
    }
  }
  return decodedStrings;
};