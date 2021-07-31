import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ProfileInfoSection from '../ProfileInfoSection';

it('Edit Info Section renders correctly', () => {
  const tree = renderer.create(<ProfileInfoSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
