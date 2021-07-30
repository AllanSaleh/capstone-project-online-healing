import * as React from 'react';
import CareersPage from "../CareersPage";
import * as renderer from "react-test-renderer";

it('Careers renders correctly', () => {
  const tree = renderer
    .create(<CareersPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});