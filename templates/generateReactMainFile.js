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
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${propsInterface}${stateInterface}
${renderFunctionDeclaration(fileName, renderTs, hasPropTypes, props)}
  return (
    ${args.style
      ? `<${fileName}Style className="root">
      <p>${fileName} component</p>
    </${fileName}Style>`
      : `<div>
      <p>${fileName} component</p>
    </div>`}
  );
}
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
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${propsInterface}${stateInterface}
class ${fileName} extends Component${interfaceConnect} {
  render() {
    return (
      ${args.style
        ? `<${fileName}Style className="root">
        <p>${fileName} component</p>
      </${fileName}Style>`
        : `<div>
        <p>${fileName} component</p>
      </div>`}
    );
  }
}
${propTypes}
export default ${fileName};
`;
  return content;
}

function generateReactMainFile(fileName, args, params) {
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

module.exports = generateReactMainFile;
