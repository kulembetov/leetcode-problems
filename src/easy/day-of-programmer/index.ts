export const dayOfProgrammer = (year: number): string => {
  let isLeapYear: boolean;
  let daysInFeb: number;

  // determine which calendar system to use and calculate the leap year status accordingly
  if (year < 1918) {
    // julian calendar: a year is a leap year if it is divisible by 4
    isLeapYear = year % 4 === 0;
  } else if (year > 1918) {
    // gregorian calendar: a year is a leap year if it is divisible by 400,
    // or it is divisible by 4 but not by 100
    isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  } else {
    // transition year (1918): not a leap year and has an irregular number of days in february
    isLeapYear = false;
  }

  // calculate the 256th day of the given year based on the calendar and leap year status
  if (year === 1918) {
    // special case for 1918 due to the transition from the julian to gregorian calendar:
    // february 14th is the 32nd day of the year, thus february has 15 days total
    daysInFeb = 15;
  } else if (isLeapYear) {
    // if it's a leap year, february has 29 days
    daysInFeb = 29;
  } else {
    // for a normal year, february has 28 days
    daysInFeb = 28;
  }

  // array of days in each month up to august
  const daysInMonths = [31, daysInFeb, 31, 30, 31, 30, 31, 31];
  // sum up all days up to august to find out the total days counted
  const daysUpToAugust = daysInMonths.reduce((a, b) => a + b);
  // determine how far into september the 256th day will be
  const dayInSeptember = 256 - daysUpToAugust;

  // using template literals to format the date in "dd.mm.yyyy" format
  return `${dayInSeptember.toString().padStart(2, '0')}.09.${year}`;
};
