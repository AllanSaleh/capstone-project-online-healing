import * as React from 'react';
import PurchasePage from "../PurchasePage";
import * as renderer from "react-test-renderer";

it('Purchase Page renders correctly', () => {
  const tree = renderer
    .create(<PurchasePage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});