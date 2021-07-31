import * as React from 'react';
import LoginPage from "../LoginPage";
import * as renderer from "react-test-renderer";

it('Login Page renders correctly', () => {
  const tree = renderer
    .create(<LoginPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});