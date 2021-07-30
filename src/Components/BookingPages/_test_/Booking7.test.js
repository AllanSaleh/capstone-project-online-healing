import * as React from 'react';
import Booking7 from "../Booking7";
import * as renderer from "react-test-renderer";

it('Booking7 renders correctly', () => {
  const tree = renderer
    .create(<Booking7/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});