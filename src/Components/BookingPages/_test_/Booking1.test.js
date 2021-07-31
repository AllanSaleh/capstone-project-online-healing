import * as React from 'react';
import Booking1 from "../Booking1";
import * as renderer from "react-test-renderer";

it('Booking1 renders correctly', () => {
  const tree = renderer
    .create(<Booking1/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});