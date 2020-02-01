const { renderString } = require('../utils.js');

function generateSingleReactNativeFile(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

${renderString(
  renderTs,
  `export interface ${fileName}Props {
  text: string;
}`)}
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

module.exports = generateSingleReactNativeFile;
