const {
  genInterface,
  genPropTypes,
  getPropsString,
  getStateString,
  getPropTypesString,
  newLine,
  renderDestructuredValues,
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
  const renderTs = args.ext === 'ts';
  const { hasProps, propString } = getPropsString(params, 'main');
  const props = renderDestructuredValues(params.props.main);
  const { hasState, stateString } = getStateString(params, 'main');
  const { hasPropTypes, propTypesString } = getPropTypesString(params, 'main');
  const propsInterface = renderString(renderTs, genInterface('Props', hasProps, propString));
  const stateInterface = renderString((renderTs && hasState), genInterface('State', hasState, stateString));
  const propTypes = renderString((hasPropTypes && !renderTs), genPropTypes(fileName, propTypesString));
  const passedArguments = {
    fileName,
    args,
    renderTs,
    hasState,
    propsInterface,
    stateInterface,
    hasPropTypes,
    propTypes,
    props,
  };
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateSingleReactNativeFile;
