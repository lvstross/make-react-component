const { newLine, renderString } = require('../utils.js');

function genInterface(name, hasParams, string) {
  return `${renderString(name === 'State', newLine(true))}${hasParams
    ? `interface ${name} {
  ${string}
}`
    : `interface ${name} {}`}${newLine(true)}`;
}

function genPropTypes(name, string) {
  return `${newLine(true)}${name}.propTypes = {
  ${string}
}${newLine(true)}`;
}

function getPropsString(params, key) {
  let propString = '';
  const hasProps = params.props[key].length > 0;
  if (hasProps) {
    params.props[key].forEach((prop, i, arr) => {
      if (i !== arr.length - 1) {
          propString += `${prop};
  `;
        return;
      }
      propString += `${prop};`;
    });
  }
  return {
    hasProps,
    propString,
  };
}

function getStateString(params, key) {
  let stateString = '';
  const hasState = params.state[key].length > 0;
  if (hasState) {
    params.state[key].forEach((state, i, arr) => {
      if (i !== arr.length - 1) {
          stateString += `${state};
  `;
        return;
      }
      stateString += `${state};`;
    });
  }
  return {
    hasState,
    stateString,
  };
}

function getPropTypesString(params, key) {
  let propTypesString = '';
  const hasPropTypes = params.props[key].length > 0;
  if (hasPropTypes) {
    params.propTypes[key].forEach((prop, i, arr) => {
      if (i !== arr.length - 1) {
          propTypesString += `${prop},
  `;
        return;
      }
      propTypesString += `${prop},`;
    });
  }
  return {
    hasPropTypes,
    propTypesString,
  };
}

module.exports = {
  genInterface,
  genPropTypes,
  getPropsString,
  getStateString,
  getPropTypesString,
}
