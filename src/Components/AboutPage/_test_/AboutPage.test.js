import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AboutPage from '../AboutPage';

it(' About Page renders correctly', () => {
  const tree = renderer.create(<AboutPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
