const { renderString } = require('../utils.js');

function generateSingleReactFile(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});

${renderString(
  renderTs,
  `export interface ${fileName}Props {
  text: string;
}`)}
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

module.exports = generateSingleReactFile;
