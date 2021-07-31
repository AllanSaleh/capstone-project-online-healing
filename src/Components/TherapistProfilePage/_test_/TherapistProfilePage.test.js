import * as React from 'react';
import TherapistProfilePage from "../ThrapistProfilePage";
import * as renderer from "react-test-renderer";

it('Therapist Profile Page renders correctly', () => {
  const tree = renderer
    .create(<TherapistProfilePage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});