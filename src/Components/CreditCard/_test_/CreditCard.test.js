import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CreditCard from '../CreditCard';

it('Credit Card renders correctly', () => {
  const tree = renderer.create(<CreditCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
