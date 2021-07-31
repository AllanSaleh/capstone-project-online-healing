import * as React from 'react';
import BlogImages from "../BlogImage";
import * as renderer from "react-test-renderer";

it('Blog Images renders correctly', () => {
  const tree = renderer
    .create(<BlogImages/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});