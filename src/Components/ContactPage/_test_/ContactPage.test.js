import * as React from 'react';
import ContactPage from "../ContactPage";
import * as renderer from "react-test-renderer";

it(' Contact Page renders correctly', () => {
  const tree = renderer
    .create(<ContactPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});