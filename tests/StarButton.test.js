import React from 'react';
import renderer from 'react-test-renderer';

import StarButton from '../StarButton';

// https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101

it('renders without crashing', () => {
  const rendered = renderer.create(
  <StarButton 
  disabled={true}
  maxStars={5}
  rating={4}
  starSize={10}
  starColor={'#FFFFFF'}
  emptyStarColor={'#000000'}
  emptyStar={'ios-star'}
  fullStar={'ios-star'}
  halfStar={'ios-star-half'}
  halfStarEnabled={true}
  iconSet={'Ionicons'}
  reversed={false}
  starIconName={'ios-add-circle'}
  onStarButtonPress={(rating) => this.onStarRatingPress(rating)}
  buttonStyle={{}}/>).toJSON();
  expect(rendered).toBeTruthy();
});
