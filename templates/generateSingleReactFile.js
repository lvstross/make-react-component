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
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});${newLine(renderTs)}
${propsInterface}${stateInterface}
${renderFunctionDeclaration(fileName, renderTs, hasPropTypes, props)}
  return (
    <Container className="root">
      <p>${fileName} component</p>
    </Container>
  );
}
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
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});${newLine(renderTs)}
${propsInterface}${stateInterface}
class ${fileName} extends Component${interfaceConnect} {
  render() {
    return (
      <Container className="root">
        <p>${fileName} component</p>
      </Container>
    );
  }
}
${propTypes}
export default ${fileName};
`;
  return content;
}

function generateSingleReactFile(fileName, args, params) {
  const passedArguments = getGenerateFileProps(fileName, args, params, 'main');
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateSingleReactFile;
