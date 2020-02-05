const chalk = require('chalk');
const manPage = require('./manPage.js');

/**
 * Test if the node version being used is 8 or higher
 *
 * @return {void} - console logs warning and exits process if node version fails
 */
function testNodeVersion() {
  const nodeVersion = process.versions.node.split('.')[0];

  if (Number(nodeVersion) < 8) {
    console.log(chalk.yellow('Warning: Node version 8 or higher is required.'));
    process.exit();
  }
}

/**
 * Determines the component name
 *
 * @return {String} componentName
 */
function getComponentName() {
  const componentName = process.argv[2] ? process.argv[2] : 'component';

  if (componentName.includes('-')) {
    console.log(chalk.yellow('Please pass your component name as the first argument.'));
    console.log(chalk.yellow(`Example: ${chalk.italic('~ makeReact modal -abc')}`));
    process.exit();
  }
  return componentName
}

/**
 * Get the manual page
 *
 * @return {void} - console logs template then exits process
 */
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

/**
 * Gets the arguments and params
 *
 * @return {Object}
 */
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

/**
 * Handler for file and directory creation
 *
 * @param {String} output - the message on success
 * @return {Function}
 */
function handler(output) {
  return (err) => {
    if (err) {
      console.log(chalk.red.bold(err));
      process.exit();
    };
    console.log(chalk.white.dim(output));
  }
}

/**
 * Checks if component needs to be generated in a directory
 *
 * @param {Object} args - arguments
 * @param {String} dirPath - path of directory
 * @param {String} path - component path
 * @return {String}
 */
function confirmDirectory(args, dirPath, path) {
  if (args.directory) {
    return `${dirPath}/${path}`;
  }
  return path;
}

/**
 * Converts values to their appropriate primative types
 *
 * @param {String} value - value to be converted
 * @return {Many}
 */
function inferTypes(value) {
  const type = value.toLowerCase();
  if (type === 'str' || type === 'string') return 'string';
  if (type === 'num' || type === 'number') return 'number';
  if (type === 'bool' || type === 'boolean') return 'boolean';
  if (type === 'obj' || type === 'object') return 'object';
  if (type === 'arr' || type === 'array') return 'array';
  if (type === 'any') return 'any';
}

/**
 * Infer Prop Types
 *
 * @param {String} value - value whos type is to be infered
 * @return {String} - infered prop type
 */
function inferPropTypes(value) {
  const type = value.toLowerCase();
  if (type === 'str' || type === 'string') return 'PropTypes.string';
  if (type === 'num' || type === 'number') return 'PropTypes.number';
  if (type === 'bool' || type === 'boolean') return 'PropTypes.boolean';
  if (type === 'obj' || type === 'object') return 'PropTypes.object';
  if (type === 'arr' || type === 'array') return 'PropTypes.array';
  if (type === 'any') return 'PropTypes.any';
}

/**
 * Interpret Params
 * Param types: @state, @props, @ext
 *
 * Files associated:
 * main = Single or Main file [@state, @props, @ext]
 * data = Datalayer file [@state, @props, @ext]
 * style = Style file [@ext]
 * util = Utils file [@ext]
 *
 * @Example: @state:data:id=null,name=levi @props:main:id=null @ext:main:jsx
 *
 * @param {Array} params
 * @return {Object} paramState
 */
function interpretParams(params) {
  let paramState = {
    state: {
      main: [],
      data: [],
    },
    props: {
      main: [],
      data: [],
    },
    propTypes: {
      main: [],
      data: [],
    },
    ext: {
      main: null,
      data: null,
      style: null,
      util: null,
    }
  };

  params.forEach(param => {
    if (param.includes('@state')) {
      const currentArgs = param.split(':');
      const commaGroups = currentArgs[2].split(',');
      commaGroups.forEach(group => {
        const keyValue = group.split('=');
        if (paramState.state[currentArgs[1]]) {
          paramState.state[currentArgs[1]].push(`${keyValue[0]}: ${inferTypes(keyValue[1])}`);
        }
      });
      return;
    }
    if (param.includes('@props')) {
      const currentArgs = param.split(':');
      const commaGroups = currentArgs[2].split(',');
      commaGroups.forEach(group => {
        const keyValue = group.split('=');
        if (paramState.props[currentArgs[1]]) {
          paramState.props[currentArgs[1]].push(`${keyValue[0]}: ${inferTypes(keyValue[1])}`);
          paramState.propTypes[currentArgs[1]].push(`${keyValue[0]}: ${inferPropTypes(keyValue[1])}`);
        }
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

/**
 * Interpret Arguments
 *
 * @Example: -Atn -DTl
 *
 * @param {Array} args
 * @return {Object}
 */
function interpretArguments(args) {
  // *** DIRECTORY ARGUMENTS ***

  // Require at least one argument.
  if (args.length === 0) {
    console.log(chalk.yellow('Missing arguments: Please provide at least one agrument.'));
    console.log(chalk.yellow(`Run ${chalk.italic('makeReact --help')} to get a full list of arguments.`));
    process.exit();
  }

  // generate component as single file with no folders
  const SINGLE_FILE = args.includes('S');
  // generate all folders and files for component
  const ALL = args.includes('A');
  // generate component as a folder
  const DIRECTORY = args.includes('D');
  // generate component test folder
  const TEST_DIRECTORY = args.includes('T');
  // generate files with lowercase, uppercase by default
  const LOWER_CASE = args.includes('l');
  //generate files as classes, functional by default
  const CLASSES = args.includes('c');

  // *** FILE ARGUMENTS ***

  // generate data layer file
  const DATALAYER = args.includes('d');
  // generate utils file
  const UTILS = args.includes('u');
  // generate styles file
  const STYLE = args.includes('s');

  // *** PLATFORM ARGUMENTS ***

  // generate files as ts, js by default
  const TS = args.includes('t');
  const ext = TS ? 'ts' : 'js';

  // generate files as react native, react by default
  const NATIVE = args.includes('n');


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
  confirmDirectory,
  interpretParams,
}
