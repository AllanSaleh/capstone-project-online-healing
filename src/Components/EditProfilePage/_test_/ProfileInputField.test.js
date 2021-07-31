import * as React from 'react';
import ProfileInputField from "../ProfileInputField";
import * as renderer from "react-test-renderer";

it('Profile Input Field renders correctly', () => {
  const tree = renderer
    .create(<ProfileInputField/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});