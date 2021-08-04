import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AddNewCardPage from '../AddNewCardPage';

it('Add New Card renders correctly', () => {
  const tree = renderer.create(<AddNewCardPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
