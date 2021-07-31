import * as React from 'react';
import NavBar from "../NavBar";
import * as renderer from "react-test-renderer";

it('NavBar renders correctly', () => {
  const tree = renderer
    .create(<NavBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});