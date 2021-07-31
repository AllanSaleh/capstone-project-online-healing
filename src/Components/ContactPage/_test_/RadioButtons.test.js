import * as React from 'react';
import RadioButtons from "../RadioButtons";
import * as renderer from "react-test-renderer";

it('Radio Buttons renders correctly', () => {
  const tree = renderer
    .create(<RadioButtons/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});