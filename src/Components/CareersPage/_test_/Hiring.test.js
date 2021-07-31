import * as React from 'react';
import Hiring from "../Hiring";
import * as renderer from "react-test-renderer";

it('Hiring renders correctly', () => {
  const tree = renderer
    .create(<Hiring/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});