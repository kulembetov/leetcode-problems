// time complexity: O(1), as the input format is fixed(HH:MM)
// space complexity: O(1), as space used doesn't depend on input size

export const findTimeDifference = (
  current: string,
  correct: string
): number => {
  // expect the string format as 12:12
  const currentMatch = current.match(/^(\d{1,2}):(\d{2})$/);
  const correctMatch = correct.match(/^(\d{1,2}):(\d{2})$/);

  // throw an error if the format does not match
  if (!currentMatch || !correctMatch) {
    throw new Error('Invalid string format');
  }

  // convert HH:MM format to total minutes
  const currentTime =
    parseInt(current.split(':')[0]) * 60 + parseInt(current.split(':')[1]);
  const correctTime =
    parseInt(correct.split(':')[0]) * 60 + parseInt(correct.split(':')[1]);
  // calculate differene in minutes
  let difference = correctTime - currentTime;

  let operations = 0;

  // iterate over the possible increments, determining how many of each are needed to react the total difference
  [60, 15, 5, 1].forEach((increment) => {
    // add floor of division to operations
    operations += Math.floor(difference / increment);
    // update the difference
    difference %= increment;
  });
  return operations;
};
