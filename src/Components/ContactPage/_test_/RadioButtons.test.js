import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RadioButtons from '../RadioButtons';

it('Radio Buttons renders correctly', () => {
  const tree = renderer.create(<RadioButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
