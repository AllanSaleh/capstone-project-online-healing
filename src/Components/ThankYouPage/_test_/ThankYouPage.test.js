import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ThankYouPage from '../ThankYouPage';

it('ThankYou Page renders correctly', () => {
  const tree = renderer.create(<ThankYouPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
