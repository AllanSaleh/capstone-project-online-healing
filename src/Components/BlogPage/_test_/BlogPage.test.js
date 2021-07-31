import * as React from 'react';
import BlogPage from "../BlogPage";
import * as renderer from "react-test-renderer";

it('Blog Page renders correctly', () => {
  const tree = renderer
    .create(<BlogPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});