import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TeamPage from '../TeamPage';

it('Team Page renders correctly', () => {
  const tree = renderer.create(<TeamPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
