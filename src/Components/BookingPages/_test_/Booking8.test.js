import * as React from 'react';
import Booking8 from "../Booking8";
import * as renderer from "react-test-renderer";

it('Booking8 renders correctly', () => {
  const tree = renderer
    .create(<Booking8/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});