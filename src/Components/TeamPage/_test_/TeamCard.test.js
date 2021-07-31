import * as React from 'react';
import TeamCard from "../TeamCard";
import * as renderer from "react-test-renderer";

it('Team Card renders correctly', () => {
  const tree = renderer
    .create(<TeamCard/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});