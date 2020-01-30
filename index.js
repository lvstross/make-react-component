const fs = require('fs');
const {
  testNodeVersion,
  getComponentName,
  getArguments,
  handler,
  interpretArguments,
  getManPage,
} = require('./utils.js');
const {
  generateDataLayerFile,
  generateIndexFile,
  generateReactMainFile,
  generateReactNativeMainFile,
  generateMainTestFile,
  generateSingleReactNativeFile,
  generateSingleReactFile,
  generateReactStyleFile,
  generateReactNativeStyleFile,
  generateUtilsTestFile,
} = require('./templates');

// *** CHECK NODE VERSION ***

// Version 10 or higher is required
testNodeVersion();

// *** GET COMPONENT NAME AND ARGUMENTS ***

getManPage();
const componentName = getComponentName();
const arguments = getArguments();
const args = interpretArguments(arguments);

// *** SET COMPONENT NAMES ***

const dirName = `${process.env.INIT_CWD || process.env.PWD}/${componentName}`;
const fileName = `${componentName[0].toUpperCase()}${componentName.substr(1)}`;

// *** GENERATE SINGLE COMPONENT FILE ***

if (args.singleFile) {
  const singleFile = `${componentName}.${args.ext}`;
  const generator = args.native
    ? generateSingleReactNativeFile(fileName)
    : generateSingleReactFile(fileName);
  fs.writeFile(
    singleFile,
    generator,
    handler(`${singleFile} was created.`)
  );
}

// *** GENERATE COMPONENT AS FOLDER ***

// Generate the component directory
if (args.directory && !fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
  console.log(`${dirName} directory was created`);
}

// Generate the test directory
const testDir = `${dirName}/__tests__`;

if ((args.directory && args.testDirectory) && !fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
  console.log(`${testDir} test directory was created`);
}

if (args.directory) {
  // Generate the index file
  const indexFile = `${dirName}/index.${args.ext}`;
  fs.writeFile(
    indexFile,
    generateIndexFile(fileName, args),
    handler(`${indexFile} was created.`)
  );

  // Generate the main file
  const mainFile = `${dirName}/${fileName}.${args.ext}`;
  const generator = args.native
    ? generateReactNativeMainFile(fileName, args)
    : generateReactMainFile(fileName, args);
  fs.writeFile(
    mainFile,
    generator,
    handler(`${mainFile} was created.`)
  );
}

if (args.testDirectory) {
  // Generate the main test file
  const mainTestFile = `${testDir}/${fileName}.test.${args.ext}`;
  fs.writeFile(
    mainTestFile,
    generateMainTestFile(fileName, args),
    handler(`${mainTestFile} was created.`)
  );
}

// Generate the data layer file
if (args.dataLayer && args.directory) {
  const dataLayerFile = `${dirName}/${fileName}.dataLayer.${args.ext}`;
  fs.writeFile(
    dataLayerFile,
    generateDataLayerFile(fileName, args),
    handler(`${dataLayerFile} was created.`)
  );
}

// Generate the utils file
if (args.utils && args.directory) {
  const utilsFile = `${dirName}/${fileName}.utils.${args.ext}`;
  fs.writeFile(utilsFile, '', handler(`${utilsFile} was created.`));
  // Generate the utils test file
  if (args.testDirectory) {
    const utilsTestFile = `${testDir}/${fileName}.utils.test.${args.ext}`;
    fs.writeFile(
      utilsTestFile,
      generateUtilsTestFile(fileName),
      handler(`${utilsTestFile} was created.`)
    );
  }
}

// Generate the style file
if (args.style && args.directory) {
  const styleFile = `${dirName}/${fileName}.style.${args.ext}`;
  const generator = args.native
    ? generateReactNativeStyleFile(fileName, args)
    : generateReactStyleFile(fileName, args);
  fs.writeFile(
    styleFile,
    generator,
    handler(`${styleFile} was created.`)
  );
}
