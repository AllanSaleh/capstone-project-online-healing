import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TherapistCreatePage from '../TherapistCreatePage';

it('Therapist Create Page renders correctly', () => {
  const tree = renderer.create(<TherapistCreatePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
