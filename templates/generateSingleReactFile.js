const {
  genInterface,
  genPropTypes,
  getPropsString,
  getStateString,
  getPropTypesString,
  newLine,
  renderString,
} = require('./utils.js');

function genAsFunction({
  fileName,
  renderTs,
  propsInterface,
  stateInterface,
  hasPropTypes,
  propTypes,
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
function ${fileName}(${renderString((hasPropTypes && !renderTs), 'props')}${renderString(renderTs, 'props: Props')}) {
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
  const renderTs = args.ext === 'ts';
  const { hasProps, propString } = getPropsString(params, 'main');
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
  };
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateSingleReactFile;
