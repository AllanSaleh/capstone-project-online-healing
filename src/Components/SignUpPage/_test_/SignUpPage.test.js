import * as React from 'react';
import SignUpPage from "../SignUpPage";
import * as renderer from "react-test-renderer";

it('Sign Up Page renders correctly', () => {
  const tree = renderer
    .create(<SignUpPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});