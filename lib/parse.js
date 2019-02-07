const parseInput = require('./parse-input'); 

const CONSTANTS = require('./constants');
const PACKAGE_CONFIG = require('../package.json');


const parseFlags = (args) => {

  let username = '';
  let repository = '';
  let version = '';

  for (let i=0; i<args.length; i++) {

    // Parse username
    const parsedUserName = parseInput(args[i], [
      CONSTANTS.USERNAME_FLAG, 
      CONSTANTS.U_FLAG
    ]);

    // Add parsed username only if its not undefined
    if (parsedUserName) {
      username = parsedUserName;
    }

    // Parse repository name
    const parsedRepository = parseInput(args[i], [
      CONSTANTS.REPOSITORY_FLAG, 
      CONSTANTS.R_FLAG
    ]);

    // Add parsed repository only if its not undefined
    if (parsedRepository) {
      repository = parsedRepository;
    }

    // Check if version flag is enabled
    if (args[i] == CONSTANTS.VERSION_FLAG || args[i] === CONSTANTS.V_FLAG) {
      version = PACKAGE_CONFIG.version;
    }
  }

  return { username, repository, version };
};


module.exports = parseFlags;
