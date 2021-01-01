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
  const passedArguments = getGenerateFileProps(fileName, args, params, 'main');
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateReactMainFile;
