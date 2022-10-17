const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = typeof str === 'string' ? str : String(str);
  const OPTIONS = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: typeof options.addition === 'undefined' ? '' : String(options.addition),
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|',
  }
  let result = '';
  for (let i = 0; i < OPTIONS.repeatTimes; i++) {
    result += newStr;
    let addition = '';
    if (OPTIONS.addition) {
      for (let g = 0; g < OPTIONS.additionRepeatTimes; g++) {
        if (g + 1 === OPTIONS.additionRepeatTimes) {
          addition += `${OPTIONS.addition}`;
        } else {
          addition += `${OPTIONS.addition}${OPTIONS.additionSeparator}`;
        }
      }
    }
    if (i + 1 === OPTIONS.repeatTimes) {
      result += `${addition}`;
    } else {
      result += `${addition}${OPTIONS.separator}`;
    }
  }
  return result
}

module.exports = {
  repeater
};
