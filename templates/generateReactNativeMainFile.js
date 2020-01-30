function generateReactNativeMainFile(fileName, args) {
  const styleImport = args.style
    ? `import ${fileName}Style from './${fileName}.style';`
    : '';
  const nativeComponentImport = args.style
    ? "import { View, Text } from 'react-native';"
    : "import { StyleSheet, View, Text } from 'react-native';"
  const styleComp = args.style
    ? `<View style={${fileName}Style.root}>
      <Text>{text}</Text>
    </View>`
    : `<View style={styles.root}>
      <Text>{text}</Text>
    </View>`;
  const styleSet = !args.style
    ? `const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    ` : '';

  const content =
`import React from 'react';
${nativeComponentImport}
${styleImport}

export interface Props {
  text: string;
}

function ${fileName}({ text }) {
  return (
    ${styleComp}
  );
}

${styleSet}
export default ${fileName};
`;
  return content;
}

module.exports = generateReactNativeMainFile;
