const { renderString, newLine } = require('../utils.js');

function genAsFunction({
  fileName,
  renderTs,
  hasProps,
  propString,
}) {
  const content =
`import React from 'react';
import ${fileName} from './${fileName}';

${hasProps
  ? renderString(renderTs, `interface Props {
  ${propString}
}`)
  : renderString(renderTs, 'interface Props {}')
}${newLine(renderTs)}
function ${fileName}DataLayer(${renderString(renderTs, 'props: Props')}) {
  return (
    <${fileName} text="${fileName} component"/>
  );
}

export default ${fileName}DataLayer;
`;
  return content;
}

function genAsClass({
  fileName,
  renderTs,
  hasProps,
  propString,
}) {
  const content =
`import React, { Component } from 'react';
import ${fileName} from './${fileName}';

${hasProps
  ? renderString(renderTs, `interface Props {
  ${propString}
}`)
  : renderString(renderTs, 'interface Props {}')
}${newLine(renderTs)}
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
  const renderTs = args.ext === 'ts';
  let propString = '';
  const hasProps = params.props.data.length > 0;
  if (hasProps) {
    params.props.data.forEach((prop, i, arr) => {
      if (i !== arr.length - 1) {
          propString += `${prop};
  `;
        return;
      }
      propString += `${prop};`;
    });
  }
  const passedArguments = {
    fileName,
    args,
    renderTs,
    hasProps,
    propString,
  };
  if (args.classes) return genAsClass(passedArguments);
  return genAsFunction(passedArguments);
}

module.exports = generateDataLayerFile;
