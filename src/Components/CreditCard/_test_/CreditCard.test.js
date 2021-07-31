import * as React from 'react';
import CreditCard from "../CreditCard";
import * as renderer from "react-test-renderer";

it('Credit Card renders correctly', () => {
  const tree = renderer
    .create(<CreditCard/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});