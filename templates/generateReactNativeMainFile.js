const { renderString, newLine } = require('../utils.js');

function genAsFunction(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
${args.style
  ? "import { View, Text } from 'react-native';"
  : "import { StyleSheet, View, Text } from 'react-native';"}
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
function ${fileName}({ text }${renderString(renderTs, `: ${fileName}Props`)}) {
  return (
    ${args.style
      ? `<View style={${fileName}Style.root}>
      <Text>{text}</Text>
    </View>`
      : `<View style={styles.root}>
      <Text>{text}</Text>
    </View>`}
  );
}${newLine(!args.style)}
${renderString(!args.style,
`const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});`)}${newLine(!args.style)}
export default ${fileName};
`;
  return content;
}

function genAsClass(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React, { Component } from 'react';
${args.style
  ? "import { View, Text } from 'react-native';"
  : "import { StyleSheet, View, Text } from 'react-native';"}
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
class ${fileName} extends Component${renderString(renderTs, `<${fileName}Props>`)} {
  render() {
    return (
      ${args.style
        ? `<View style={${fileName}Style.root}>
        <Text>{text}</Text>
      </View>`
        : `<View style={styles.root}>
        <Text>{text}</Text>
      </View>`}
    );
  }
}${newLine(!args.style)}
${renderString(!args.style,
`const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});`)}${newLine(!args.style)}
export default ${fileName};
`;
  return content;
}

function generateReactNativeMainFile(fileName, args) {
  if (args.classes) return genAsClass(fileName, args);
  return genAsFunction(fileName, args);
}

module.exports = generateReactNativeMainFile;
