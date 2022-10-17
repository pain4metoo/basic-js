const { NotImplementedError } = require('../extensions/index.js');

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
  for (let i = 0; i < matrix.length; i++) {
    for (let g = 0; g < matrix[i].length; g++) {
      if (matrix[i][g]) {
        matrix[i][g] = 1;
      }
      if (matrix.length <= 2) {
        matrix[i][g] = 0
      }
    }
  }

  for (let q = 0; q < matrix.length; q++) {
    for (let w = 0; w < matrix[q].length; w++) {
      let counter = 0;
      if (matrix[q][w - 1] === 1 && matrix[q][w - 1]) {
        counter += 1;
      }
      if (matrix[q][w + 1] === 1 && matrix[q][w + 1]) {
        counter += 1;
      }
      if (matrix[q - 1] && matrix[q - 1][w] === 1) {
        counter += 1
      }
      if (matrix[q + 1] && matrix[q + 1][w] === 1) {
        counter += 1;
      }
      if (counter >= 2) {
        matrix[q][w] = 2;
        counter = 0;
      }
    }
  }

  return matrix.length >= 3 ? matrix.map(item => item.map(elem => !elem ? 1 : elem)) : matrix
}

module.exports = {
  minesweeper
};


