import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PurchasePage from '../PurchasePage';

it('Purchase Page renders correctly', () => {
  const tree = renderer.create(<PurchasePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
