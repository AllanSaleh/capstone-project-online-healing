import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TicketSection from '../TicketSection';

it('Ticket Section renders correctly', () => {
  const tree = renderer.create(<TicketSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
