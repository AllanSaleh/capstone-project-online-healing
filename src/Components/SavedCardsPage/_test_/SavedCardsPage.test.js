import * as React from 'react';
import SavedCardsPage from "../SavedCardsPage";
import * as renderer from "react-test-renderer";

it('Saved Cards Page renders correctly', () => {
  const tree = renderer
    .create(<SavedCardsPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});