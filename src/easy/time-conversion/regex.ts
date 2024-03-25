// time complexity: O(1), the string format is constant
// space complexity: O(1), no additional space proportional to input size

export const timeConversion = (s: string): string => {
  // use regex to parse the time string into parts
  // expect the string format such as 12:00:00AM
  const parts = s.match(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/);

  // throw an error if the format does not match
  if (!parts) {
    throw new Error('Invalid string format');
  }

  // extract hours, minutes, seconds, and period from the parts
  let hours = parseInt(parts[1], 10);
  const minutes = parts[2];
  const seconds = parts[3];
  const period = parts[4];

  // convert hours based on period
  if (period === 'AM') {
    // convert 12AM to 00
    hours = hours === 12 ? 0 : hours;
  } else {
    // convert PM to military time
    hours = hours === 12 ? hours : hours + 12;
  }

  // format hours to ensure two digits
  const militaryHours = hours < 10 ? `0${hours}` : hours.toString();

  // construct and return the military time string
  return `${militaryHours}:${minutes}:${seconds}`;
};
