import * as React from 'react';
import InputField from "../InputField";
import * as renderer from "react-test-renderer";

it('Input Field renders correctly', () => {
  const tree = renderer
    .create(<InputField/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});