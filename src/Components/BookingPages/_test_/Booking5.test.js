import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking5 from '../Booking5';

it('Booking5 renders correctly', () => {
  const tree = renderer.create(<Booking5 />).toJSON();
  expect(tree).toMatchSnapshot();
});
