import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ContactPage from '../ContactPage';

it(' Contact Page renders correctly', () => {
  const tree = renderer.create(<ContactPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
