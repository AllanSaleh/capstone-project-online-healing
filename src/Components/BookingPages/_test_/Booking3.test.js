import * as React from 'react';
import Booking3 from "../Booking3";
import * as renderer from "react-test-renderer";

it('Booking3 renders correctly', () => {
  const tree = renderer
    .create(<Booking3/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});