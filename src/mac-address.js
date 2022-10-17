const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let splitArr = n.split('').filter(a => a !== '-')

  return splitArr.every(item => {
    let typeItem = typeof (isNaN(+item) ? item : +item);
    let charCode = item.charCodeAt();

    if (typeItem === 'number') {
      return charCode >= 48 && charCode <= 57;
    } else if (typeItem === 'string') {
      return charCode >= 65 && charCode <= 70;
    }
  })
}
module.exports = {
  isMAC48Address
};
