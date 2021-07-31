import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BlogImages from '../BlogImage';

it('Blog Images renders correctly', () => {
  const tree = renderer.create(<BlogImages />).toJSON();
  expect(tree).toMatchSnapshot();
});
