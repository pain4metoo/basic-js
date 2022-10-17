const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let g = 0; g < matrix[i].length; g++) {
      if (matrix[i][g] === 0) {
        matrix[i][g] = ''
        if (matrix[i + 1]) {
          matrix[i + 1][g] = '';
        }
        if (matrix[i + 2]) {
          matrix[i + 2][g] = '';
        }
      }
    }
  }
  
  return matrix.reduce((acc, arr) => {
    return acc += arr.filter(a => a !== '').reduce((accum, item) => {
      return accum += item
    }, 0)
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
