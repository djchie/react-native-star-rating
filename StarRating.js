// React and react native imports
import React, {
  Component,
} from 'react';
import {
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

// Local file imports
import StarButton from './StarButton';

const propTypes = {
  buttonStyle: ViewPropTypes.style,
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
  halfStarEnabled: PropTypes.bool,
  halfStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  iconSet: PropTypes.string,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  reversed: PropTypes.bool,
  selectedStar: PropTypes.func,
  starColor: PropTypes.string,
  starSize: PropTypes.number,
  starStyle: ViewPropTypes.style,
};

const defaultProps = {
  buttonStyle: {},
  disabled: false,
  emptyStar: 'star-o',
  emptyStarColor: 'gray',
  fullStar: 'star',
  halfStar: 'star-half-o',
  halfStarEnabled: false,
  iconSet: 'FontAwesome',
  maxStars: 5,
  rating: 0,
  reversed: false,
  selectedStar: () => undefined,
  starColor: 'black',
  starSize: 40,
  starStyle: {},
};

class StarRating extends Component {

  constructor(props) {
    super(props);

    this.onStarButtonPress = this.onStarButtonPress.bind(this);
  }

  onStarButtonPress(rating) {
    const { selectedStar } = this.props;

    selectedStar(rating);
  }

  render() {
    const {
      buttonStyle,
      disabled,
      emptyStar,
      emptyStarColor,
      fullStar,
      halfStar,
      halfStarEnabled,
      iconSet,
      maxStars,
      rating,
      reversed,
      starColor,
      starSize,
      starStyle,
    } = this.props;

    const starRatingStyles = [
      {
        flexDirection: reversed ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
      },
      style,
    ];

    // Round rating down to nearest .5 star
    let starsLeft = Math.round(rating * 2) / 2;
    const starButtons = [];

    for (let i = 0; i < maxStars; i++) {
      let starIconName = emptyStar;
      let finalStarColor = emptyStarColor;

      if (starsLeft >= 1) {
        starIconName = fullStar;
        finalStarColor = starColor;
      } else if (starsLeft === 0.5) {
        starIconName = halfStar;
        finalStarColor = starColor;
      }

      const starButtonElement = (
        <StarButton
          activeOpacity={0.20}
          buttonStyle={buttonStyle}
          disabled={disabled}
          halfStarEnabled={halfStarEnabled}
          iconSet={iconSet}
          key={i}
          onStarButtonPress={this.onStarButtonPress}
          rating={i + 1}
          reversed={reversed}
          starColor={finalStarColor}
          starIconName={starIconName}
          starSize={starSize}
          starStyle={starStyle}
        />
      );

      starButtons.push(starButtonElement);
      starsLeft -= 1;
    }

    return (
      <View style={starRatingStyles}>
        {starButtons}
      </View>
    );
  }
}

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
