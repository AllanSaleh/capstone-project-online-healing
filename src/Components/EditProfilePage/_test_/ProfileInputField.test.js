import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ProfileInputField from '../ProfileInputField';

it('Profile Input Field renders correctly', () => {
  const tree = renderer.create(<ProfileInputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
