import * as React from 'react';
import EditProfilePage from "../EditProfilePage";
import * as renderer from "react-test-renderer";

it('Edit Profile Page renders correctly', () => {
  const tree = renderer
    .create(<EditProfilePage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});