import * as React from 'react';
import Form from "../Form";
import * as renderer from "react-test-renderer";

it('Form renders correctly', () => {
  const tree = renderer
    .create(<Form/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});