/**
 * Iterates over flags array
 * parse and returns input for the flag
 * @param {String} input 
 * @param {Array} flags 
 */
const parseInput = (input, flags) => {

  for (let index in flags) {
    if (input.startsWith(flags[index])) {
      return input.replace(flags[index], '');
    }
  }

  return undefined;
};


module.exports = parseInput;
