function generateReactMainFile(fileName, args) {
  const styleImport = args.style
    ? `import ${fileName}Style from './${fileName}.style';`
    : '';
  const styleComp = args.style
    ? `<${fileName}Style className="root">
      <p>{text}</p>
    </${fileName}Style>`
    : `<div>
      <p>{text}</p>
    </div>`;

  const content =
`import React from 'react';
${styleImport}

function ${fileName}({ text }) {
  return (
    ${styleComp}
  );
}

export default ${fileName};
`;
  return content;
}

module.exports = generateReactMainFile;
