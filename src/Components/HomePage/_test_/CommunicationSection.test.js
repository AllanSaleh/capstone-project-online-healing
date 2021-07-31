import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CommunicationSection from '../CommunicationSection';

it('Communication Section renders correctly', () => {
  const tree = renderer.create(<CommunicationSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
