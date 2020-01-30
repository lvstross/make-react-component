function generateMainTestFile(fileName) {
  const content =
`import React from 'react';
import { shallow } from 'enzyme';
import ${fileName} from '../${fileName}';

describe('${fileName}', () => {
  const defaultProps = {
    //
  };
  it('should render with props', () => {
    const wrapper = shallow(<${fileName} {...defaultProps}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
`;
  return content;
}

module.exports = generateMainTestFile;
