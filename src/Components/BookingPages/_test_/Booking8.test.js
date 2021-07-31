import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking8 from '../Booking8';

it('Booking8 renders correctly', () => {
  const tree = renderer.create(<Booking8 />).toJSON();
  expect(tree).toMatchSnapshot();
});
