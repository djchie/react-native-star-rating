'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';

const starImages = {
  emptyStar: require('./img/empty-star.png'),
  halfStar: require('./img/half-star.png'),
  fullStar: require('./img/full-star.png')
}

class StarRating extends Component {

  constructor(props) {
    super(props);

    // Round rating down to nearest .5 star
    const roundedRating = (Math.round(this.props.rating * 2) / 2);
    this.state = {
      maxStars: this.props.maxStars,
      rating: roundedRating
    };
  }

  pressStarButton(rating) {
    console.log('pressStarButton', rating);
    this.props.selectedStar(rating);
    if (!this.props.disabled) {
      this.setState({
        rating: rating
      });
    }
  }

  render() {
    var starsLeft = this.state.rating;
    const starButtons = [];
    for (var i = 0; i < this.state.maxStars; i++) {
      var starImage = starImages.emptyStar;
      if (starsLeft >= 1) {
        starImage = starImages.fullStar;
      } else if (starsLeft === 0.5) {
        starImage = starImages.halfStar;
      }
      starButtons.push(
        <Button
          activeOpacity={0.20}
          disabled={this.props.disabled}
          key={i + 1}
          onPress={this.pressStarButton.bind(this, i + 1)}
          style={{
            height: this.props.starSize,
            width: this.props.starSize,
          }}
        >
          <Image
            source={starImage}
            style={{
              height: this.props.starSize,
              width: this.props.starSize
            }}
          />
        </Button>
      );
      starsLeft--;
    }
    return (
      <View style={styles.starRatingContainer}>
        {starButtons}
      </View>
    );
  }
};

StarRating.propTypes = {
  disabled: PropTypes.bool,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  selectedStar: PropTypes.func.isRequired,
  style: View.propTypes.style,
  starSize: PropTypes.number,
  starColor: PropTypes.string,
}

StarRating.defaultProps = {
  disabled: false,
  maxStars: 5,
  rating: 0,
  starColor: 'black',
}

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

module.exports = StarRating;
