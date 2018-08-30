import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '../StarRating';

// https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101

const baseProps = {};

const getMock = (props = {}) => {
  const allProps = { ...baseProps, ...props };
  return (
    <StarRating {...allProps} />
  );
};

describe('StarRating component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(getMock()).toJSON();

    expect(rendered).toBeTruthy();
  });
});
