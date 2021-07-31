import * as React from 'react';
import Booking6 from "../Booking6";
import * as renderer from "react-test-renderer";

it('Booking6 renders correctly', () => {
  const tree = renderer
    .create(<Booking6/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});