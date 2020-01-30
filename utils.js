const manPage = require('./manPage.js');

function testNodeVersion() {
  const nodeVersion = process.versions.node.split('.')[0];

  if (Number(nodeVersion) < 10) {
    console.log('Please upgrade node version to 10 or higher.');
    process.exit();
  }
}

function getComponentName() {
  const componentName = process.argv[2] ? process.argv[2] : 'component';

  if (componentName.includes('-')) {
    console.log('Please pass your component name as the first argument.');
    console.log('Example: ~ componentName -abc');
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
    console.log(manPage());
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
    if (err) throw err;
    console.log(output);
  }
}

function interpretArguments(arguments) {
  // *** DIRECTORY ARGUMENTS ***

  // Require at least one argument.
  if (arguments.length === 0) {
    console.log('Error: Missing argument. Please provide at least one agrument.');
    console.log('run with --help to get full list of arguments.');
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
