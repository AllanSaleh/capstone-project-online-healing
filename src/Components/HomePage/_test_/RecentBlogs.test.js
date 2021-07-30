import * as React from 'react';
import RecentBlogs from "../RecentBlogs";
import * as renderer from "react-test-renderer";

it('Recent Blog renders correctly', () => {
  const tree = renderer
    .create(<RecentBlogs/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});