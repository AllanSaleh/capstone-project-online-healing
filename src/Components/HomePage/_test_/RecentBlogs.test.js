import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RecentBlogs from '../RecentBlogs';

it('Recent Blog renders correctly', () => {
  const tree = renderer.create(<RecentBlogs />).toJSON();
  expect(tree).toMatchSnapshot();
});
