const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let maxDepth = 0;

    for (let element of arr) {
      if (Array.isArray(element)) {
        const currentDepth = this.calculateDepth(element);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }

    return 1 + maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
