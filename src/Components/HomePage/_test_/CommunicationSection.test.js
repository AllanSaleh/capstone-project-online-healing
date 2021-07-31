import * as React from 'react';
import CommunicationSection from "../CommunicationSection";
import * as renderer from "react-test-renderer";

it('Communication Section renders correctly', () => {
  const tree = renderer
    .create(<CommunicationSection/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});