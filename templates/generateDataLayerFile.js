function generateDataLayerFile(fileName, args) {
  const content =
`import React from 'react';
import ${fileName} from './${fileName}';

function ${fileName}DataLayer() {
  return (
    <${fileName} text="${fileName} component"/>
  );
}

export default ${fileName}DataLayer;
`;
  return content;
}

module.exports = generateDataLayerFile;
