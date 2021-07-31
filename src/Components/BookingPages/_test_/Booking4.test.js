import * as React from 'react';
import Booking4 from "../Booking4";
import * as renderer from "react-test-renderer";

it('Booking4 renders correctly', () => {
  const tree = renderer
    .create(<Booking4/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});