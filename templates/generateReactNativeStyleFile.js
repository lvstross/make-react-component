function generateReactNativeStyleFile(fileName, args) {
  const content =
`import { StyleSheet } from 'react-native';

const ${fileName}Style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ${fileName}Style;
`;
  return content;
}

module.exports = generateReactNativeStyleFile;
