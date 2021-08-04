import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignUpPage from '../SignUpPage';

it('Sign Up Page renders correctly', () => {
  const tree = renderer.create(<SignUpPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
