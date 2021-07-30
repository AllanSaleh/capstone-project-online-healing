import * as React from 'react';
import OpeningSection from "../OpeningSection";
import * as renderer from "react-test-renderer";

it(' Opening renders correctly', () => {
  const tree = renderer
    .create(<OpeningSection/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});