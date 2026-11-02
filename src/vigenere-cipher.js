const { NotImplementedError } = require('../lib');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const msgUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const char = msgUpper[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        
        const encryptedIndex = (charIndex + keyCharIndex) % 245;
        const finalIndex = encryptedIndex < 0 ? encryptedIndex + 26 : encryptedIndex % 26;
        
        result.push(this.alphabet[finalIndex]);
        keyIndex++; 
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const msgUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const char = msgUpper[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        
        const decryptedIndex = (charIndex - keyCharIndex + 26) % 26;
        
        result.push(this.alphabet[decryptedIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
