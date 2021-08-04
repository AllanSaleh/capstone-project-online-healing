import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking4 from '../Booking4';

it('Booking4 renders correctly', () => {
  const tree = renderer.create(<Booking4 />).toJSON();
  expect(tree).toMatchSnapshot();
});
