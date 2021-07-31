import * as React from 'react';
import TicketSection from "../TicketSection";
import * as renderer from "react-test-renderer";

it('Ticket Section renders correctly', () => {
  const tree = renderer
    .create(<TicketSection/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});