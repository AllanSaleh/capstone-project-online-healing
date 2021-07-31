import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SecuritySection from '../SecuritySection';

it('Security Section renders correctly', () => {
  const tree = renderer.create(<SecuritySection />).toJSON();
  expect(tree).toMatchSnapshot();
});
