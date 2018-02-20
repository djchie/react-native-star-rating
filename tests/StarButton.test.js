import React from 'react';
import renderer from 'react-test-renderer';

import StarButton from '../StarButton';

// https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101

it('renders without crashing', () => {
  const rendered = renderer.create(<StarButton />).toJSON();
  expect(rendered).toBeTruthy();
});
