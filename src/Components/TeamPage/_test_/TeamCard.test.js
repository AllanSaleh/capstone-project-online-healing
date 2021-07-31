import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TeamCard from '../TeamCard';

it('Team Card renders correctly', () => {
  const tree = renderer.create(<TeamCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
