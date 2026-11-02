const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const nameCount = {};

  for (let name of names) {
    
    if (nameCount[name] === undefined) {
      result.push(name);
      nameCount[name] = 1;
    } else {
      let k = nameCount[name];
      let newName = `${name}(${k})`;

      while (nameCount[newName] !== undefined) {
        k++;
        newName = `${name}(${k})`;
      }

      result.push(newName);
      nameCount[newName] = 1; 
      nameCount[name] = k + 1; 
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
