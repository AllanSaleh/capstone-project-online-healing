import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TherapistProfilePage from '../TherapistProfilePage';

it('Therapist Profile Page renders correctly', () => {
  const tree = renderer.create(<TherapistProfilePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
