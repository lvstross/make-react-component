const {
  getGenerateFileProps,
  newLine,
  renderFunctionDeclaration,
  renderString,
} = require('./utils.js');

function genAsFunction({
  fileName,
  args,
  renderTs,
  propsInterface,
  stateInterface,
  hasPropTypes,
  propTypes,
  props,
}) {
  const content =
`import React from 'react';${renderString((hasPropTypes && !renderTs), `${newLine(true)}import PropTypes from 'prop-types';`)}
${args.style
  ? "import { View, Text } from 'react-native';"
  : "import { StyleSheet, View, Text } from 'react-native';"}
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${propsInterface}${stateInterface}
${renderFunctionDeclaration(fileName, renderTs, hasPropTypes, props)}
  return (
    ${args.style
      ? `<View style={${fileName}Style.root}>
      <Text>${fileName} component</Text>
    </View>`
      : `<View style={styles.root}>
      <Text>${fileName} component</Text>
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
${propTypes}
export default ${fileName};
`;
  return content;
}

function genAsClass({
  fileName,
  args,
  renderTs,
  hasState,
  propsInterface,
  stateInterface,
  hasPropTypes,
  propTypes,
}) {
  const interfaceConnect = renderString(renderTs, `<Props${renderString(hasState, ', State')}>`);
  const content =
`import React, { Component } from 'react';${renderString((hasPropTypes && !renderTs), `${newLine(true)}import PropTypes from 'prop-types';`)}
${args.style
  ? "import { View, Text } from 'react-native';"
  : "import { StyleSheet, View, Text } from 'react-native';"}
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${propsInterface}${stateInterface}
class ${fileName} extends Component${interfaceConnect} {
  render() {
    return (
      ${args.style
        ? `<View style={${fileName}Style.root}>
        <Text>${fileName} component</Text>
      </View>`
        : `<View style={styles.root}>
        <Text>${fileName} component</Text>
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
${propTypes}
export default ${fileName};
`;
  return content;
}

function generateReactNativeMainFile(fileName, args, params) {
  const passedArguments = getGenerateFileProps(fileName, args, params, 'main');
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateReactNativeMainFile;
