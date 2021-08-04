import * as React from 'react';
import * as renderer from 'react-test-renderer';
import EditProfilePage from '../EditProfilePage';

it('Edit Profile Page renders correctly', () => {
  const tree = renderer.create(<EditProfilePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
