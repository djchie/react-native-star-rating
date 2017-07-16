// React and react native imports
import {
  StyleSheet,
  View,
} from 'react-native';

import React, {
  Component,
  PropTypes,
} from 'react';

// Local file imports
import StarButton from './star-button';


class StarRating extends Component {

  constructor(props) {
    super(props);

    this.state = {
      maxStars: this.props.maxStars,
    };

    this.onStarButtonPress = this.onStarButtonPress.bind(this);
  }

  onStarButtonPress(rating) {
    this.props.selectedStar(rating);
  }

  round(number) {
    return (Math.round(number * 2) / 2);
  }

  render()
  {

    const styles = StyleSheet.create({
        starRatingContainer: {
            flexDirection: 'row',
            justifyContent : this.props.rightToLeft ? 'flex-end' : 'flex-start',
        },
    });

    // Round rating down to nearest .5 star
    let starsLeft = this.round(this.props.rating);
    let starButtons = [];

    for (let i = 0; i < this.state.maxStars; i++) {
      let starIconName = this.props.emptyStar;
      let starColor = this.props.emptyStarColor;

      if (starsLeft >= 1) {
        starIconName = this.props.fullStar;
        starColor = this.props.starColor;
      } else if (starsLeft === 0.5) {
        starIconName = this.props.halfStar;
        starColor = this.props.starColor;
      }

      starButtons.push(
        <StarButton
          activeOpacity={0.20}
          disabled={this.props.disabled}
          key={i}
          rating={i + 1}
          onStarButtonPress={this.onStarButtonPress}
          iconSet={this.props.iconSet}
          starSize={this.props.starSize}
          starIconName={starIconName}
          starColor={starColor}
          starStyle={this.props.starStyle}
          buttonStyle={this.props.buttonStyle}
        />
      );
      starsLeft--;
    }

    if (this.props.rightToLeft)
    {
        starButtons = starButtons.reverse();
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
  rightToLeft: PropTypes.bool ,
  emptyStar: PropTypes.string,
  fullStar: PropTypes.string,
  halfStar: PropTypes.string,
  iconSet: PropTypes.string,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  selectedStar: PropTypes.func,
  starColor: PropTypes.string,
  emptyStarColor: PropTypes.string,
  starSize: PropTypes.number,
  starStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
};

StarRating.defaultProps = {
  disabled: false,
  rightToLeft: false ,
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
};

export default StarRating;
