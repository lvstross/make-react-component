const { renderString } = require('../utils.js');

function generateReactMainFile(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}

${renderString(
  renderTs,
  `export interface ${fileName}Props {
  text: string;
}`)}
function ${fileName}({ text }${renderString(renderTs, `: ${fileName}Props`)}) {
  return (
    ${args.style
      ? `<${fileName}Style className="root">
      <p>{text}</p>
    </${fileName}Style>`
      : `<div>
      <p>{text}</p>
    </div>`}
  );
}

export default ${fileName};
`;
  return content;
}

module.exports = generateReactMainFile;
