import * as React from 'react';
import BlogBody from "../BlogBody";
import * as renderer from "react-test-renderer";

it('Blog Body renders correctly', () => {
  const tree = renderer
    .create(<BlogBody/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});