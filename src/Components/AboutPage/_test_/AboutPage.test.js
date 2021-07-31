import * as React from 'react';
import AboutPage from "../AboutPage";
import * as renderer from "react-test-renderer";

it(' About Page renders correctly', () => {
  const tree = renderer
    .create(<AboutPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});