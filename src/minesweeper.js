const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push(Array(matrix[i].length).fill(0));
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let minesCount = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;

          const neighborRow = row + x;
          const neighborCol = col + y;

          if (
            neighborRow >= 0 &&
            neighborRow < matrix.length &&
            neighborCol >= 0 &&
            neighborCol < matrix[row].length
          ) {
            if (matrix[neighborRow][neighborCol] === true) {
              minesCount++;
            }
          }
        }
      }

      result[row][col] = minesCount;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
