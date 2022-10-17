const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  return str.split('').map((item, index, arr) => {
    let result = '';
    counter++
    if (arr[index] !== arr[index + 1]) {
      if (counter > 1) {
        result += counter
      }
      counter = 0
      return result += arr[index];
    }
  }).filter(item => item).join('')

}

module.exports = {
  encodeLine
};
