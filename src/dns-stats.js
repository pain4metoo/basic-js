const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach((item) => {
    let dotsCounter = item.split('').reduce((acc, next) => acc += next === '.' ? 1 : 0, 0);
    let DNS1 = item.split('').slice(item.lastIndexOf('.') + 1).join('')
    let DNS2 = item.split('').map((item, index, arr) => dotsCounter === 1 ? index < arr.indexOf('.') ? item : false : index > arr.indexOf('.') && index < arr.lastIndexOf('.') ? item : false).filter(item => item).join('')
    let DNS3 = item.split('').slice(dotsCounter === 1 ? -1 : 0, item.indexOf('.')).join('')
    if (!result[`.${DNS1}`]) {
      result[`.${DNS1}`] = 1;
    } else {
      result[`.${DNS1}`]++
    }
    if (!result[`.${DNS1}.${DNS2}`]) {
      result[`.${DNS1}.${DNS2}`] = 1;
    } else {
      result[`.${DNS1}.${DNS2}`]++
    }
    if (!result[`.${DNS1}.${DNS2}.${DNS3}`] && DNS3.length > 0) {
      result[`.${DNS1}.${DNS2}.${DNS3}`] = 1;
    } else {
      if (DNS3.length > 0) {
        result[`.${DNS1}.${DNS2}.${DNS3}`]++
      }
    }
  })

  return result
}

module.exports = {
  getDNSStats
};
