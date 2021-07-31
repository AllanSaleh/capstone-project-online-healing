import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Hiring from '../Hiring';

it('Hiring renders correctly', () => {
  const tree = renderer.create(<Hiring />).toJSON();
  expect(tree).toMatchSnapshot();
});
