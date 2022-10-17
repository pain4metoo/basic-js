const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChar = 0;
  let result = new Array(s1, s2).map(item => item.split(''));

  for (let i = 0; i < result[0].length; i++) {
    if (result[1].includes(result[0][i])) {
      result[1].splice(result[1].indexOf(result[0][i]), 1)
      commonChar++
    }
  }

  return commonChar
}

module.exports = {
  getCommonCharacterCount
};
