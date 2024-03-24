// time complexity: O(n), iterates through each grade once
// space complexity: O(1), uses constant extra space, independent of input size

export const gradingStudents = (grades: number[]): number[] => {
  return grades.map((grade) => {
    // return the grade if it's less than 38
    if (grade < 38) return grade;

    // calculate the next multiple of 5
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    // round up if the difference if less than 3
    if (nextMultipleOfFive - grade < 3) return nextMultipleOfFive;
    // no rounding if difference is less than 3
    return grade;
  });
};
