import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking7 from '../Booking7';

it('Booking7 renders correctly', () => {
  const tree = renderer.create(<Booking7 />).toJSON();
  expect(tree).toMatchSnapshot();
});
