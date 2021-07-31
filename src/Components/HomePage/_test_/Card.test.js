import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Card from '../Card';

it(' Card renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
