const chalk = require('chalk');
const manPage = require('./manPage.js');

function testNodeVersion() {
  const nodeVersion = process.versions.node.split('.')[0];

  if (Number(nodeVersion) < 8) {
    console.log(chalk.yellow('Warning: Node version 8 or higher is required.'));
    process.exit();
  }
}

function getComponentName() {
  const componentName = process.argv[2] ? process.argv[2] : 'component';

  if (componentName.includes('-')) {
    console.log(chalk.yellow('Please pass your component name as the first argument.'));
    console.log(chalk.yellow(`Example: ${chalk.italic('~ makeReact modal -abc')}`));
    process.exit();
  }
  return componentName
}

function getManPage() {
  const findHelp = process.argv.some(arg => {
    return arg === '--help';
  });
  if (findHelp) {
    console.clear();
    console.log(chalk.green(manPage()));
    process.exit();
  }
}

function getArguments() {
  const dashGroups = process.argv.filter(arg => {
    return arg.includes('-') && !arg.includes('--');
  });
  const totalArgs = dashGroups.reduce((acc, curr) => {
    if (curr.includes('-') && curr.length > 1) {
      const currentArgs = curr.split('');
      currentArgs.shift();
      currentArgs.forEach(arg => {
        acc.push(arg);
      });
    }
    return acc;
  }, []);
  return totalArgs;
}

function handler(output) {
  return (err) => {
    if (err) {
      console.log(chalk.red.bold(err));
      process.exit();
    };
    console.log(chalk.white.dim(output));
  }
}

function interpretArguments(arguments) {
  // *** DIRECTORY ARGUMENTS ***

  // Require at least one argument.
  if (arguments.length === 0) {
    console.log(chalk.yellow('Missing arguments: Please provide at least one agrument.'));
    console.log(chalk.yellow(`Run ${chalk.italic('makeReact --help')} to get a full list of arguments.`));
    process.exit();
  }

  // generate component as single file with no folders
  const SINGLE_FILE = arguments.includes('S');
  // generate all folders and files for component
  const ALL = arguments.includes('A');
  // generate component was a folder
  const DIRECTORY = arguments.includes('D');
  // generate component test folder
  const TEST_DIRECTORY = arguments.includes('T');

  // *** FILE ARGUMENTS ***

  // generate data layer file
  const DATALAYER = arguments.includes('d');
  // generate utils file
  const UTILS = arguments.includes('u');
  // generate styles file
  const STYLE = arguments.includes('s');

  // *** EXTENSION ARGUMENTS ***

  // generate files as ts, js by default
  const TS = arguments.includes('t');
  const ext = TS ? 'ts' : 'js';

  // *** PLATFORM ARGUMENTS ***

  // generate files as react native, react by default
  const NATIVE = arguments.includes('n');


  return {
    singleFile: SINGLE_FILE,
    all: ALL,
    directory: ALL || DIRECTORY || TEST_DIRECTORY || DATALAYER || UTILS || STYLE,
    testDirectory: ALL || TEST_DIRECTORY,
    dataLayer: ALL || DATALAYER,
    utils: ALL || UTILS,
    style: ALL || STYLE,
    ext,
    native: NATIVE,
  };
}

module.exports = {
  testNodeVersion,
  getComponentName,
  getArguments,
  handler,
  interpretArguments,
  getManPage,
}
