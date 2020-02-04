const { renderString, newLine } = require('../utils.js');

function genAsFunction(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
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

function genAsClass(fileName, args) {
  const renderTs = args.ext === 'ts';
  const content =
`import React, { Component } from 'react';
${renderString(args.style, `import ${fileName}Style from './${fileName}.style';`)}${newLine(args.style)}
${renderString(
  renderTs,
  `interface ${fileName}Props {
  text: string;
}`)}${newLine(renderTs)}
class ${fileName} extends Component${renderString(renderTs, `<${fileName}Props>`)} {
  render() {
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
}

export default ${fileName};
`;
  return content;
}

function generateReactMainFile(fileName, args) {
  if (args.classes) return genAsClass(fileName, args);
  return genAsFunction(fileName, args);
}

module.exports = generateReactMainFile;
