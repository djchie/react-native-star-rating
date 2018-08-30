import React from 'react';
import renderer from 'react-test-renderer';

import StarButton from '../StarButton';

// https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101

const baseProps = {
  disabled: false,
  halfStarEnabled: false,
  iconSet: 'FontAwesome',
  rating: 3,
  reversed: false,
  starColor: 'yellow',
  starIconName: 'star',
  starSize: 40,
  activeOpacity: 0.2,
  onStarButtonPress: () => {},
};

const getMock = (props = {}) => {
  const allProps = { ...baseProps, ...props };
  return (
    <StarButton {...allProps} />
  );
};

describe('StarButton component', () => {
  it('renders', () => {
    const rendered = renderer.create(getMock()).toJSON();

    expect(rendered).toBeTruthy();
  });
});
