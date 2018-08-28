// React and react native imports
import React, { Component } from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View as AnimatableView } from 'react-native-animatable';

// Local file imports
import StarButton from './StarButton';

const propTypes = {
  activeOpacity: PropTypes.number,
  animationEnabled: PropTypes.bool,
  buttonStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  emptyStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  emptyStarColor: PropTypes.string,
  fullStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  fullStarColor: PropTypes.string,
  halfStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  halfStarColor: PropTypes.string,
  halfStarEnabled: PropTypes.bool,
  iconSet: PropTypes.string,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  reversed: PropTypes.bool,
  selectedStar: PropTypes.func,
  starSize: PropTypes.number,
  starStyle: ViewPropTypes.style,
};

const defaultProps = {
  activeOpacity: 0.2,
  animationEnabled: false,
  buttonStyle: {},
  containerStyle: {},
  disabled: false,
  emptyStar: 'star-o',
  emptyStarColor: 'gray',
  fullStar: 'star',
  fullStarColor: 'black',
  halfStar: 'star-half-o',
  halfStarColor: undefined,
  halfStarEnabled: false,
  iconSet: 'FontAwesome',
  maxStars: 5,
  rating: 0,
  reversed: false,
  selectedStar: () => {},
  starSize: 40,
  starStyle: {},
};

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.starRef = [];
    this.onStarButtonPress = this.onStarButtonPress.bind(this);
  }

  onStarButtonPress(rating) {
    const { selectedStar } = this.props;

    selectedStar(rating);
  }

  render() {
    const {
      activeOpacity,
      animationEnabled,
      buttonStyle,
      containerStyle,
      disabled,
      emptyStar,
      emptyStarColor,
      fullStar,
      fullStarColor,
      halfStar,
      halfStarColor,
      halfStarEnabled,
      iconSet,
      maxStars,
      rating,
      reversed,
      starSize,
      starStyle,
    } = this.props;

    const newContainerStyle = {
      flexDirection: reversed ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      ...StyleSheet.flatten(containerStyle),
    };

    // Round rating down to nearest .5 star
    let starsLeft = Math.round(rating * 2) / 2;
    const starButtons = [];

    for (let i = 0; i < maxStars; i++) {
      let starIconName = emptyStar;
      let finalStarColor = emptyStarColor;

      if (starsLeft >= 1) {
        starIconName = fullStar;
        finalStarColor = fullStarColor;
      } else if (starsLeft === 0.5) {
        starIconName = halfStar;
        if (halfStarColor) {
          finalStarColor = halfStarColor;
        } else {
          finalStarColor = fullStarColor;
        }
      }

      const starButtonElement = (
        <AnimatableView
          key={i}
          ref={(node) => { this.starRef.push(node); }}
        >
          <StarButton
            activeOpacity={activeOpacity}
            buttonStyle={buttonStyle}
            disabled={disabled}
            halfStarEnabled={halfStarEnabled}
            iconSet={iconSet}
            onStarButtonPress={(event) => {
              if (animationEnabled) {
                for (let s = 0; s <= i; s++) {
                  this.starRef[s].rubberBand(1000 + (s * 200));
                }
              }
              this.onStarButtonPress(event);
            }}
            rating={i + 1}
            reversed={reversed}
            starColor={finalStarColor}
            starIconName={starIconName}
            starSize={starSize}
            starStyle={starStyle}
          />
        </AnimatableView>
      );

      starButtons.push(starButtonElement);
      starsLeft -= 1;
    }

    return (
      <View style={newContainerStyle}>
        {starButtons}
      </View>
    );
  }
}

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
