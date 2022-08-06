import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '../StarRating';

/* eslint-disable react/jsx-props-no-spreading */

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
