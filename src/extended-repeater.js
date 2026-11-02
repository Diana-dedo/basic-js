const { NotImplementedError } = require('../lib');

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
  const mainStr = String(str);
  const repeatTimes = options.repeatTimes || 1;
  
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  const additionPieces = Array(additionRepeatTimes).fill(addition);
  const fullAddition = additionPieces.join(additionSeparator);

  const oneFullPiece = mainStr + fullAddition;

  const finalPieces = Array(repeatTimes).fill(oneFullPiece);
  return finalPieces.join(separator);
}


module.exports = {
  repeater
};
