import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SavedCardsPage from '../SavedCardsPage';

it('Saved Cards Page renders correctly', () => {
  const tree = renderer.create(<SavedCardsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
