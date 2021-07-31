import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Position from '../Position';

it(' Position renders correctly', () => {
  const tree = renderer.create(<Position />).toJSON();
  expect(tree).toMatchSnapshot();
});
