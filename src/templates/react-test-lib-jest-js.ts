export default
`import React from 'react';
import { render, fireEvent } from '@testing-library/react';

jest.mock('my/module', () => ({
  someModuleExport: jest.fn()
}));

describe('test one', () => {
  const props = {
    onButtonClick: jest.fn()
  };

  it('should find username', () => {
    const { queryByText } = render(<MyComponent {...props} />);
    expect(queryByText('John Doe')).toBeDefined();
  });

  it('should have content', () => {
    const { getByTestId } = render(<MyComponent {...props} />);
    const component = getByTestId('output-text');
    expect(component).not.toBeNull();
    expect(component.textContent).toBe('Hello World');
  });

  it('should call function', () => {
    const { getByText } = render(<MyComponent {...props} />);
    fireEvent.click(getByText('Go to'));
    expect(props.onButtonClick).toHaveBeenCalled();
  });
});
`;