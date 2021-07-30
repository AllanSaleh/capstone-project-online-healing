import * as React from 'react';
import Booking2 from "../Booking2";
import * as renderer from "react-test-renderer";

it('Booking2 renders correctly', () => {
  const tree = renderer
    .create(<Booking2/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});