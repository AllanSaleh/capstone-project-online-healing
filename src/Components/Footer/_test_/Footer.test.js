import * as React from 'react';
import Footer from "../Footer";
import * as renderer from "react-test-renderer";

it('Footer renders correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});