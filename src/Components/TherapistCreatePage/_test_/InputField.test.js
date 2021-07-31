import * as React from 'react';
import * as renderer from 'react-test-renderer';
import InputField from '../InputField';

it('Input Field renders correctly', () => {
  const tree = renderer.create(<InputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
