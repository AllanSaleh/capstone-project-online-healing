import * as React from 'react';
import Booking5 from "../Booking5";
import * as renderer from "react-test-renderer";

it('Booking5 renders correctly', () => {
  const tree = renderer
    .create(<Booking5/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});