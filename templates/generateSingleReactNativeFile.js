const { renderString, newLine } = require('../utils.js');

function genAsFunction(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';${newLine(renderTs)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
function ${fileName}({ text }${renderString(renderTs, `: ${fileName}Props`)}) {
  return (
    <View style={styles.root}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ${fileName};
`;
  return content;
}

function genAsClass(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';${newLine(renderTs)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
class ${fileName} extends Component${renderString(renderTs, `<${fileName}Props>`)} {
  render() {
    return (
      <View style={styles.root}>
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ${fileName};
`;
  return content;
}

function generateSingleReactNativeFile(fileName, args) {
  if (args.classes) return genAsClass(fileName, args);
  return genAsFunction(fileName, args);
}

module.exports = generateSingleReactNativeFile;
