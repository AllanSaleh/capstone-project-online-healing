import * as React from 'react';
import AddNewCardPage from "../AddNewCardPage";
import * as renderer from "react-test-renderer";

it('Add New Card renders correctly', () => {
  const tree = renderer
    .create(<AddNewCardPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});