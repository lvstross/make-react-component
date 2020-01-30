function generateSingleReactFile(fileName) {
  const content =
`import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div({
  '&.root': {
    //
  },
});

function ${fileName}({ text }) {
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
