const rhof = require('@gh-conf/rhof');
const ora = require('ora');


const generateHof = async (username, repository) => {

  const spinner = ora(`Generting HOF for ${repository} owned by ${username}`).start();
  let hof = await rhof(username, repository);

  console.log('\n/------------------HALL OF FAME----------------------/\n');
  console.log(hof ? hof : 'Err!!! Invalid input details');
  console.log('\n/----------------*-*-*-*-*-*-*-*---------------------/\n');

  spinner.stop();
};


module.exports = generateHof;
