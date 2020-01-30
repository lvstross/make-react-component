function generateSingleReactNativeFile(fileName) {
  const content =
`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  text?: string;
}

function ${fileName}({ text }) {
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
