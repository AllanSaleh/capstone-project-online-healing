import * as React from 'react';
import * as renderer from 'react-test-renderer';
import QuestionComponent from '../QuestionComponent';

it('Question Componenet renders correctly', () => {
  const tree = renderer.create(<QuestionComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
