/*
time complexity: O(1), because the board size is constant (9x9)
space complexity: O(1) for the same reason, although we could argue it's O(n) where n is the size of the board
if we were considering Sudoku boards of variable sizes
*/

const isValidSudoku = (board: string[][]): boolean => {
  // initialize rows, columns, and boxes to track numbers
  let rows: Set<string>[] = new Array(9)
    .fill(null)
    .map(() => new Set<string>());
  let cols: Set<string>[] = new Array(9)
    .fill(null)
    .map(() => new Set<string>());
  let boxes: Set<string>[] = new Array(9)
    .fill(null)
    .map(() => new Set<string>());

  // iterate through each cell in the board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]; // current cell value
      // check if the cell is not empty
      if (num !== '.') {
        // calculate box index based on cell position
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        // validate the number against current row, column, and box
        if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
          // duplicate found, invalid board
          return false;
        }
        // add number to sets if not already present
        rows[i].add(num);
        cols[j].add(num);
        boxes[boxIndex].add(num);
      }
    }
  }
  // no duplicates found, valid board
  return true;
};
