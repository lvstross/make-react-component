const { renderString, newLine } = require('../utils.js');

function genAsFunction(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});${newLine(renderTs)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
function ${fileName}({ text }${renderString(renderTs, `: ${fileName}Props`)}) {
  return (
    <Container className="root">
      <p>{text}</p>
    </Container>
  );
}

export default ${fileName};
`;
  return content;
}

function genAsClass(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});${newLine(renderTs)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
class ${fileName} extends Component${renderString(renderTs, `<${fileName}Props>`)} {
  render() {
    return (
      <Container className="root">
        <p>{text}</p>
      </Container>
    );
  }
}

export default ${fileName};
`;
  return content;
}

function generateSingleReactFile(fileName, args) {
  if (args.classes) return genAsClass(fileName, args);
  return genAsFunction(fileName, args);
}

module.exports = generateSingleReactFile;
