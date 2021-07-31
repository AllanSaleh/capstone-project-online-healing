import * as React from 'react';
import HomePage from "../HomePage";
import * as renderer from "react-test-renderer";

it('Home Page renders correctly', () => {
  const tree = renderer
    .create(<HomePage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});