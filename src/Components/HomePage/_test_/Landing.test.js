import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Landing from '../Landing';

it('Landing renders correctly', () => {
  const tree = renderer.create(<Landing />).toJSON();
  expect(tree).toMatchSnapshot();
});
