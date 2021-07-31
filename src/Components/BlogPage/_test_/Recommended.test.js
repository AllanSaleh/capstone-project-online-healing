import * as React from 'react';
import Recommended from "../Recommended";
import * as renderer from "react-test-renderer";

it('Recommended renders correctly', () => {
  const tree = renderer
    .create(<Recommended/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});