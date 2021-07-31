import * as React from 'react';
import Landing from "../Landing";
import * as renderer from "react-test-renderer";

it('Landing renders correctly', () => {
  const tree = renderer
    .create(<Landing/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});