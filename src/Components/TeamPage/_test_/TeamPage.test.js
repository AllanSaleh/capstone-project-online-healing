import * as React from 'react';
import TeamPage from "../TeamPage";
import * as renderer from "react-test-renderer";

it('Team Page renders correctly', () => {
  const tree = renderer
    .create(<TeamPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});