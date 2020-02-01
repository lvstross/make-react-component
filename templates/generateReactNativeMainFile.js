const { renderString } = require('../utils.js');

function generateReactNativeMainFile(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
${args.style
  ? "import { View, Text } from 'react-native';"
  : "import { StyleSheet, View, Text } from 'react-native';"}
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}

${renderString(
  renderTs,
  `export interface ${fileName}Props {
  text: string;
}`)}
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
}

${renderString(!args.style,
`const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});`)}
export default ${fileName};
`;
  return content;
}

module.exports = generateReactNativeMainFile;
