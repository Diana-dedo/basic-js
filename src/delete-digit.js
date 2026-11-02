const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    const currentStr = str.slice(0, i) + str.slice(i + 1);
    const currentNum = Number(currentStr);
    if (currentNum > maxNumber) {
      maxNumber = currentNum;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
