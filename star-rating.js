// React and react native imports
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

// Local file imports
import StarButton from './star-button';

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

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

  round(number) {
    return (Math.round(number * 2) / 2);
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
    } = this.props;

    // Round rating down to nearest .5 star
    let starsLeft = this.round(rating);
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

      starButtons.push(
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
        />
      );
      starsLeft--;
    }

    return (
      <View style={styles.starRatingContainer}>
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
};

StarRating.defaultProps = {
  disabled: false,
  emptyStar: 'star-o',
  fullStar: 'star',
  halfStar: 'star-half-o',
  iconSet: 'FontAwesome',
  maxStars: 5,
  rating: 0,
  starColor: 'black',
  emptyStarColor: 'gray',
  starSize: 40,
  starStyle: {},
  buttonStyle: {},
  halfStarEnabled: false,
};

export default StarRating;
