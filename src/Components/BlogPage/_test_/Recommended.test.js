import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Recommended from '../Recommended';

it('Recommended renders correctly', () => {
  const tree = renderer.create(<Recommended />).toJSON();
  expect(tree).toMatchSnapshot();
});
