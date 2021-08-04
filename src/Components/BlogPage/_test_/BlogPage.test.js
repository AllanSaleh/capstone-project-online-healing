import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BlogPage from '../BlogPage';

it('Blog Page renders correctly', () => {
  const tree = renderer.create(<BlogPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
