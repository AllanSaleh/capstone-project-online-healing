import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BlogBody from '../BlogBody';

it('Blog Body renders correctly', () => {
  const tree = renderer.create(<BlogBody />).toJSON();
  expect(tree).toMatchSnapshot();
});
