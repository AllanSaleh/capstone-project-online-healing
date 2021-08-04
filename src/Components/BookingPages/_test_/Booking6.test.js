import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking6 from '../Booking6';

it('Booking6 renders correctly', () => {
  const tree = renderer.create(<Booking6 />).toJSON();
  expect(tree).toMatchSnapshot();
});
