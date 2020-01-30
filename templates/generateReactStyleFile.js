function generateReactStyleFile(fileName, args) {
  const content =
`import styled from '@emotion/styled';

const ${fileName}Style = styled.div({
  '&.root': {
    //
  },
});

export default ${fileName}Style;
`;
  return content;
}

module.exports = generateReactStyleFile;
