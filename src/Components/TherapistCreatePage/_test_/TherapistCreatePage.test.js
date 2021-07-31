import * as React from 'react';
import TherapistCreatePage from "../TherapistCreatePage";
import * as renderer from "react-test-renderer";

it('Therapist Create Page renders correctly', () => {
  const tree = renderer
    .create(<TherapistCreatePage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


