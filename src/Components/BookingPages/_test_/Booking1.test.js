import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking1 from '../Booking1';

it('Booking1 renders correctly', () => {
  const tree = renderer.create(<Booking1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
