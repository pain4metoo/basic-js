const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
    let spaceIndexArr = string.split('').map((item, index) => item === ' ' ? index : 0).filter(item => item)
    let result = [];
    let newArr = string.split(' ').join('');
    for (let i = 0, g = 0; i < newArr.length; i++, g++) {
      const index = 97;
      let charCodeStr = newArr[i].toLowerCase().charCodeAt();
      if (g > key.length - 1) {
        g = 0;
      }
      let charCodeKey = key[i] ? key[i].toLowerCase().charCodeAt() : key[g].toLowerCase().charCodeAt();

      if (charCodeStr >= index && charCodeStr <= 122) {
        result.push([index - charCodeStr < 0 ? charCodeStr - index : index - charCodeStr, index - charCodeKey < 0 ? charCodeKey - index : index - charCodeKey])
      } else {
        result.push([newArr[i]])
      }
    }

    result = result.map(item => item[0] + item[1] < 26 ? String.fromCharCode(String(item[0] + item[1] + 97)) : typeof item[0] === 'number' ? String.fromCharCode(String((item[0] + item[1]) - 26 + 97)) : item[0])
    for (let d = 0; d < spaceIndexArr.length; d++) {
      result.splice(spaceIndexArr[d], 0, ' ');
    }

    return !this.type ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
    let spaceIndexArr = string.split('').map((item, index) => item === ' ' ? index : 0).filter(item => item)
    let result = [];
    let newArr = string.split(' ').join('').toLowerCase();

    for (let i = 0, g = 0; i < newArr.length; i++, g++) {
      const index = 97;
      let charCodeStr = newArr[i].toLowerCase().charCodeAt();
      if (g > key.length - 1) {
        g = 0;
      }
      let charCodeKey = key[i] ? key[i].toLowerCase().charCodeAt() : key[g].toLowerCase().charCodeAt();
      if (charCodeStr >= index && charCodeStr <= 122) {
        result.push([index - charCodeStr < 0 ? charCodeStr - index : index - charCodeStr, index - charCodeKey < 0 ? charCodeKey - index : index - charCodeKey])
      } else {
        result.push([newArr[i]])
      }
    }
    result = result.map(item => item[0] - item[1] >= 0 ? String.fromCharCode(String(item[0] - item[1] + 97)) : typeof item[0] === 'number' ? String.fromCharCode(String(((item[0] + 26) - item[1]) + 97)) : item[0])

    for (let d = 0; d < spaceIndexArr.length; d++) {
      result.splice(spaceIndexArr[d], 0, ' ');
    }

    return !this.type ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
