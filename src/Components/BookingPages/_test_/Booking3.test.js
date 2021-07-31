import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking3 from '../Booking3';

it('Booking3 renders correctly', () => {
  const tree = renderer.create(<Booking3 />).toJSON();
  expect(tree).toMatchSnapshot();
});
