import { gradingStudents } from './iteration';

describe('gradingStudents', () => {
  it('should return the grades after rounding as appropriate', () => {
    const grades = [4, 73, 67, 38, 33];
    expect(gradingStudents(grades)).toEqual([4, 75, 67, 40, 33]);
  });

  it('should round grades only above 38', () => {
    expect(gradingStudents([37, 18, 29])).toEqual([37, 18, 29]);
  });

  it('rounds grades to the nearest multiple of 5 when applicable', () => {
    expect(gradingStudents([44, 85, 39])).toEqual([45, 85, 40]);
  });

  it('leaves grades as is if the difference to the next multiple of 5 is 3 or more', () => {
    expect(gradingStudents([57, 62, 66])).toEqual([57, 62, 66]);
  });
});
