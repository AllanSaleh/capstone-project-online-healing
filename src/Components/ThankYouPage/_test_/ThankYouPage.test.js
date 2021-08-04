import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ThankYouPage from '../ThankYouPage';

it('THank you Page renders correctly', () => {
  const tree = renderer.create(<ThankYouPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
