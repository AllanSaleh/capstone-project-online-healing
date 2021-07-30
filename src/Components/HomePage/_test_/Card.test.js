import * as React from 'react';
import Card from "../Card";
import * as renderer from "react-test-renderer";

it(' Card renders correctly', () => {
  const tree = renderer
    .create(<Card/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});