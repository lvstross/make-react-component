/**
 * Render String if the condition is true
 *
 * @param {Boolean} condition
 * @param {String} string
 * @return {String}
 */
function renderString(condition, string) {
  if (condition) return string;
  return '';
}

/**
 * Render a new line if condition is true
 *
 * @param {Boolean} condition
 * @return {String}
 */
function newLine(condition) {
  if (condition) {
    return `
`;
  }
  return '';
}

/**
 * Generate Interface for TypeScript
 *
 * @param {String} name
 * @param {Boolean} hasParam
 * @param {String} string
 * @return {String}
 */
function genInterface(name, hasParams, string) {
  return `${renderString(name === 'State', newLine(true))}${hasParams
    ? `interface ${name} {
  ${string}
}`
    : `interface ${name} {}`}${newLine(true)}`;
}

/**
 * Generate prop types object
 *
 * @param {String} name
 * @param {String} string
 * @return {String}
 */
function genPropTypes(name, string) {
  return `${newLine(true)}${name}.propTypes = {
  ${string}
}${newLine(true)}`;
}

/**
 * Generate Prop String
 *
 * @param {Object} params - paramState
 * @param {String} key - paramState key
 * @return {Object}
 */
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

/**
 * Generate state string
 *
 * @param {Object} params - paramState
 * @param {String} key - paramState key
 * @return {Object}
 */
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

/**
 * Generate prop types string
 *
 * @param {Object} params - paramState
 * @param {String} key - paramState key
 * @return {Object}
 */
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
  newLine,
  renderString,
}
