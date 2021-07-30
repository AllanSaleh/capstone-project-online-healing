import * as React from 'react';
import QuestionComponent from "../QuestionComponent";
import * as renderer from "react-test-renderer";

it('Question Componenet renders correctly', () => {
  const tree = renderer
    .create(<QuestionComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});