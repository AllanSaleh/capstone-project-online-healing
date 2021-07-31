import * as React from 'react';
import SecuritySection from "../SecuritySection";
import * as renderer from "react-test-renderer";

it('Security Section renders correctly', () => {
  const tree = renderer
    .create(<SecuritySection/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});