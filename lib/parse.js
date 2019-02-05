const CONSTANTS = require('./constants');
var PACKAGE_CONFIG = require('../package.json');


const parseFlags = (args) => {

  let username = '';
  let repository = '';
  let version = '';

  for (let i=0; i<args.length; i++) {
    if (args[i].startsWith(CONSTANTS.USERNAME_FLAG)) {
      username = args[i].replace(CONSTANTS.USERNAME_FLAG, '');
    }

    if (args[i].startsWith(CONSTANTS.REPOSITORY_FLAG)) {
      repository = args[i].replace(CONSTANTS.REPOSITORY_FLAG, '');
    }

    if (args[i] == CONSTANTS.VERSION_FLAG) {
      version = PACKAGE_CONFIG.version;
    }
  }

  return { username, repository, version };
};


module.exports = parseFlags;
