import * as React from 'react';
import * as renderer from 'react-test-renderer';
import EditProfileButton from '../EditProfileButton';

it('Edit Profile Button renders correctly', () => {
  const tree = renderer.create(<EditProfileButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
