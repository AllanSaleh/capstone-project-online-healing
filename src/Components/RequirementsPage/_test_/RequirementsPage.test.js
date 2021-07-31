import * as React from 'react';
import RequirementsPage from "../RequirementsPage";
import * as renderer from "react-test-renderer";

it('Requirement Page renders correctly', () => {
  const tree = renderer
    .create(<RequirementsPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});