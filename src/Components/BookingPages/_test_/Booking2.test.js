import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Booking2 from '../Booking2';

it('Booking2 renders correctly', () => {
  const tree = renderer.create(<Booking2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
