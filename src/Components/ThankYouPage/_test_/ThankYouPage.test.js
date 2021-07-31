import * as React from 'react';
import ThankYouPage from "../ThankYouPage";
import * as renderer from "react-test-renderer";

it('THank you Page renders correctly', () => {
  const tree = renderer
    .create(<ThankYouPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});