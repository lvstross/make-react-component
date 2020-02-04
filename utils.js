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
  const totalParams = process.argv.filter(arg => {
    return arg.includes(':');
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
  return {
    totalArgs,
    totalParams,
  };
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

function renderString(condition, string) {
  if (condition) return string;
  return '';
}

function newLine(condition) {
  if (condition) {
    return `
`;
  }
  return '';
}

function confirmDirectory(args, dirPath, path) {
  if (args.directory) {
    return `${dirPath}/${path}`;
  }
  return path;
}

function convertNullValues(value) {
  if (value === 'null') {
    return null;
  }
  return value;
}

function interpretParams(params) {
  // *** list of param types ***
  // @state, @props, @ext
  //
  // *** file associators ***
  // param = file tyle [support]
  // main = Single file, Main file [@state, @props, @ext]
  // data = Datalayer file [@state, @props, @ext]
  // style = Style file [@ext]
  // util = Util file [@ext]
  let paramState = {
    state: {
      main: {},
      data: {},
    },
    props: {
      main: {},
      data: {},
    },
    ext: {
      main: null,
      data: null,
      style: null,
      util: null,
    }
  };
  // @TODO: may need to keep as strings for easier templating
  // or find a way to take state paramState from key value pair
  // back to template string value.

  params.forEach(param => {
    if (param.includes('@state')) {
      const currentArgs = param.split(':');
      const commaGroups = currentArgs[2].split(',');
      commaGroups.forEach(group => {
        const keyValue = group.split('=');
        paramState.state[currentArgs[1]][keyValue[0]] = convertNullValues(keyValue[1]);
      });
      return;
    }
    if (param.includes('@props')) {
      const currentArgs = param.split(':');
      const commaGroups = currentArgs[2].split(',');
      commaGroups.forEach(group => {
        const keyValue = group.split('=');
        paramState.props[currentArgs[1]][keyValue[0]] = convertNullValues(keyValue[1]);
      });
      return;
    }
    if (param.includes('@ext')) {
      const currentArgs = param.split(':');
      paramState.ext[currentArgs[1]] = currentArgs[2];
      return;
    }
  });
  return paramState;
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
  // generate component as a folder
  const DIRECTORY = arguments.includes('D');
  // generate component test folder
  const TEST_DIRECTORY = arguments.includes('T');
  // generate files with lowercase, uppercase by default
  const LOWER_CASE = arguments.includes('l');
  //generate files as classes, functional by default
  const CLASSES = arguments.includes('c');

  // *** FILE ARGUMENTS ***

  // generate data layer file
  const DATALAYER = arguments.includes('d');
  // generate utils file
  const UTILS = arguments.includes('u');
  // generate styles file
  const STYLE = arguments.includes('s');

  // *** PLATFORM ARGUMENTS ***

  // generate files as ts, js by default
  const TS = arguments.includes('t');
  const ext = TS ? 'ts' : 'js';

  // generate files as react native, react by default
  const NATIVE = arguments.includes('n');


  return {
    all: ALL,
    classes: CLASSES,
    dataLayer: ALL || DATALAYER,
    directory: ALL || DIRECTORY || TEST_DIRECTORY,
    ext,
    lowerCase: LOWER_CASE,
    native: NATIVE,
    singleFile: SINGLE_FILE,
    style: ALL || STYLE,
    testDirectory: ALL || TEST_DIRECTORY,
    utils: ALL || UTILS,
  };
}

module.exports = {
  testNodeVersion,
  getComponentName,
  getArguments,
  handler,
  interpretArguments,
  getManPage,
  renderString,
  confirmDirectory,
  newLine,
  interpretParams,
}
