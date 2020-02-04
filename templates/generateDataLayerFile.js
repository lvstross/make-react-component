const { renderString, newLine } = require('../utils.js');

function genAsFunction(fileName, args, params) {
  const renderTs = args.ext === 'ts';
  const content =
`import React from 'react';
import ${fileName} from './${fileName}';

${renderString(renderTs, 'interface Props {}')}${newLine(renderTs)}
function ${fileName}DataLayer(props: Props) {
  return (
    <${fileName} text="${fileName} component"/>
  );
}

export default ${fileName}DataLayer;
`;
  return content;
}

function genAsClass(fileName, args, params) {
  const renderTs = args.ext === 'ts';
  const content =
`import React, { Component } from 'react';
import ${fileName} from './${fileName}';

${renderString(renderTs, 'interface Props {}')}${newLine(renderTs)}
class ${fileName}DataLayer extends Component${renderString(renderTs, '<Props>')} {
  render() {
    return (
      <${fileName} text="${fileName} component"/>
    );
  }
}

export default ${fileName}DataLayer;
`;
  return content;
}

function generateDataLayerFile(fileName, args, params) {
  if (args.classes) return genAsClass(fileName, args, params);
  return genAsFunction(fileName, args, params);
}

module.exports = generateDataLayerFile;
