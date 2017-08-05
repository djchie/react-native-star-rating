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
import StarButton from './star-button';

class StarRating extends Component {

  constructor(props) {
    super(props);

    this.onStarButtonPress = this.onStarButtonPress.bind(this);
  }

  onStarButtonPress(rating) {
    const {
      selectedStar,
    } = this.props;

    selectedStar(rating);
  }

  render() {
    const {
      maxStars,
      rating,
      emptyStar,
      emptyStarColor,
      fullStar,
      halfStar,
      starColor,
      disabled,
      iconSet,
      starSize,
      starStyle,
      buttonStyle,
      halfStarEnabled,
      reversed,
    } = this.props;

    const starRatingStyles = {
      flexDirection: reversed ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
    };

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
          disabled={disabled}
          key={i}
          rating={i + 1}
          onStarButtonPress={this.onStarButtonPress}
          iconSet={iconSet}
          starSize={starSize}
          starIconName={starIconName}
          starColor={finalStarColor}
          starStyle={starStyle}
          buttonStyle={buttonStyle}
          halfStarEnabled={halfStarEnabled}
          reversed={reversed}
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

StarRating.propTypes = {
  disabled: PropTypes.bool,
  emptyStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  fullStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  halfStar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  iconSet: PropTypes.string,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  selectedStar: PropTypes.func,
  starColor: PropTypes.string,
  emptyStarColor: PropTypes.string,
  starSize: PropTypes.number,
  starStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  halfStarEnabled: PropTypes.bool,
  reversed: PropTypes.bool,
};

StarRating.defaultProps = {
  disabled: false,
  emptyStar: 'star-o',
  fullStar: 'star',
  halfStar: 'star-half-o',
  iconSet: 'FontAwesome',
  maxStars: 5,
  rating: 0,
  selectedStar: () => undefined,
  starColor: 'black',
  emptyStarColor: 'gray',
  starSize: 40,
  starStyle: {},
  buttonStyle: {},
  halfStarEnabled: false,
  reversed: false,
};

export default StarRating;
