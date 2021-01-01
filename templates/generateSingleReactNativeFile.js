const {
  getGenerateFileProps,
  newLine,
  renderFunctionDeclaration,
  renderString,
} = require('./utils.js');

function genAsFunction({
  fileName,
  renderTs,
  propsInterface,
  stateInterface,
  hasPropTypes,
  propTypes,
  props,
}) {
  const content =
`import React from 'react';${renderString((hasPropTypes && !renderTs), `${newLine(true)}import PropTypes from 'prop-types';`)}
import { StyleSheet, Text, View } from 'react-native';${newLine(renderTs)}
${propsInterface}${stateInterface}
${renderFunctionDeclaration(fileName, renderTs, hasPropTypes, props)}
  return (
    <View style={styles.root}>
      <Text>${fileName} component</Text>
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
${propTypes}
export default ${fileName};
`;
  return content;
}

function genAsClass({
  fileName,
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
import { StyleSheet, Text, View } from 'react-native';${newLine(renderTs)}
${propsInterface}${stateInterface}
class ${fileName} extends Component${interfaceConnect} {
  render() {
    return (
      <View style={styles.root}>
        <Text>${fileName} component</Text>
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
${propTypes}
export default ${fileName};
`;
  return content;
}

function generateSingleReactNativeFile(fileName, args, params) {
  const passedArguments = getGenerateFileProps(fileName, args, params, 'main');
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateSingleReactNativeFile;
