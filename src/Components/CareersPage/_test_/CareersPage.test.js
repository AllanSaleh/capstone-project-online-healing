import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CareersPage from '../CareersPage';

it('Careers renders correctly', () => {
  const tree = renderer.create(<CareersPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
