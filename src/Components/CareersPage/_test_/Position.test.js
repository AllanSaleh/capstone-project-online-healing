import * as React from 'react';
import Position from "../Position";
import * as renderer from "react-test-renderer";

it(' Position renders correctly', () => {
  const tree = renderer
    .create(<Position/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});