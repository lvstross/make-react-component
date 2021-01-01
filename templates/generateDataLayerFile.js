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
import ${fileName} from './${fileName}';

${propsInterface}${stateInterface}
${renderFunctionDeclaration(`${fileName}DataLayer`, renderTs, hasPropTypes, props)}
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
  const passedArguments = getGenerateFileProps(fileName, args, params, 'data');
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateDataLayerFile;
