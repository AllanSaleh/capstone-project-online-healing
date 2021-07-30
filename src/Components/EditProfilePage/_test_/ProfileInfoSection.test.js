import * as React from 'react';
import ProfileInfoSection from "../ProfileInfoSection";
import * as renderer from "react-test-renderer";

it('Edit Info Section renders correctly', () => {
  const tree = renderer
    .create(<ProfileInfoSection/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});