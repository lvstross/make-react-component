const { renderString, newLine } = require('../utils.js');
const {
  genInterface,
  genPropTypes,
  getPropsString,
  getStateString,
  getPropTypesString,
} = require('./utils.js');

function genAsFunction({
  fileName,
  renderTs,
  hasState,
  propsInterface,
  stateInterface,
  hasPropTypes,
  propTypes,
}) {
  const content =
`import React from 'react';${renderString((hasPropTypes && !renderTs), `${newLine(true)}import PropTypes from 'prop-types';`)}
import ${fileName} from './${fileName}';

${propsInterface}${stateInterface}
function ${fileName}DataLayer(${renderString(renderTs, 'props: Props')}) {
  return (
    <${fileName}/>
  );
}
${propTypes}
export default ${fileName}DataLayer;
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
import ${fileName} from './${fileName}';

${propsInterface}${stateInterface}
class ${fileName}DataLayer extends Component${interfaceConnect} {
  render() {
    return (
      <${fileName}/>
    );
  }
}
${propTypes}
export default ${fileName}DataLayer;
`;
  return content;
}

function generateDataLayerFile(fileName, args, params) {
  const renderTs = args.ext === 'ts';
  const { hasProps, propString } = getPropsString(params, 'data');
  const { hasState, stateString } = getStateString(params, 'data');
  const { hasPropTypes, propTypesString } = getPropTypesString(params, 'data');
  const propsInterface = renderString(renderTs, genInterface('Props', hasProps, propString));
  const stateInterface = renderString((renderTs && hasState), genInterface('State', hasState, stateString));
  const propTypes = renderString((hasPropTypes && !renderTs), genPropTypes(`${fileName}DataLayer`, propTypesString));
  const passedArguments = {
    fileName,
    renderTs,
    hasState,
    propsInterface,
    stateInterface,
    hasPropTypes,
    propTypes,
  };
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateDataLayerFile;
