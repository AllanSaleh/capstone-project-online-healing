import * as React from 'react';
import Description from "../Description";
import * as renderer from "react-test-renderer";

it(' Description renders correctly', () => {
  const tree = renderer
    .create(<Description/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});