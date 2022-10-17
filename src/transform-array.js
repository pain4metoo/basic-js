const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case '--discard-prev':
        if (result[i - 1] && arr[i] !== '--discard-next') {
          result.splice(i - 1, 2);
          i -= 2;
        } else {
          result.splice(i, 1)
        }
        break;
      case '--discard-next':
        if (result[i + 1] && arr[i + 2] !== '--discard-prev') {
          result.splice(i, 2);
          i -= 2;
        } else {
          result.splice(i, 1);
        }
        break;
      case '--double-prev':
        if (result[i - 1] && arr[i] !== '--discard-next') {
          result.splice(i, 1, result[i - 1]);
        } else {
          result.splice(i, 1)
        }
        break;
      case '--double-next':
        if (result[i + 1] && arr[i] !== '--discard-prev') {
          result.splice(i, 1, result[i + 1]);
        } else {
          result.splice(i, 1)
        }
        break;
    }
  }
  return result
}

module.exports = {
  transform
};
