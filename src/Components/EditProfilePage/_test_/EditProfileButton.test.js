import * as React from 'react';
import EditProfileButton from "../EditProfileButton";
import * as renderer from "react-test-renderer";

it('Edit Profile Button renders correctly', () => {
  const tree = renderer
    .create(<EditProfileButton/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});