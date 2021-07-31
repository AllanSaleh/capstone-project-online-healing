import * as React from 'react';
import * as renderer from 'react-test-renderer';
import OpeningSection from '../OpeningSection';

it(' Opening renders correctly', () => {
  const tree = renderer.create(<OpeningSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
