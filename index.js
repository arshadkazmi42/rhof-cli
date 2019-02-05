#!/usr/bin/env node

const { parse, generateHof } = require('./lib');


const hof = async (args) => {

  try {

    const { 
      username, 
      repository,
      version
    } = parse(args);

    // Print version and return if version flag exists
    if (version) {
      return console.log(version);
    }

    // If either username or repository is missing
    if (!username || !repository) {
      throw new Error('Username and repository are required');
    }

    // Print the HOF
    return await generateHof(username, repository);
  } catch (err) {

    console.log(err);
  }
};


const [, , ...args] = process.argv;
hof(args);
