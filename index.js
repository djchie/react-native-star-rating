'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View
} = React;

var {Icon,} = require('react-native-icons');
var Button = require('react-native-button');

var StarRating = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool,
    maxStars: React.PropTypes.number,
    rating: React.PropTypes.number,
    selectedStar: React.PropTypes.func,
    style: View.propTypes.style,
    starSize: React.PropTypes.number,
    starColor: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      disabled: false,
      maxStars: 5,
      rating: 0,
      starColor: 'black',
    };
  },
  getInitialState: function () {
    // Round rating down to nearest .5 star
    var roundedRating = (Math.round(this.props.rating * 2) / 2);
    return {
      maxStars: this.props.maxStars,
      rating: roundedRating
    };
  },
  pressStarButton: function (rating) {
    this.props.selectedStar(rating);
    if (!this.props.disabled) {
      this.setState({
        rating: rating,
      });
    }
  },
  render: function () {
    var starsLeft = this.state.rating;
    var starButtons = [];
    for (var i = 0; i < this.state.maxStars; i++) {
      var starIcon = 'fontawesome|star-o';
      if (starsLeft >= 1) {
        starIcon = 'fontawesome|star';
      } else if (starsLeft === 0.5) {
        starIcon = 'fontawesome|star-half-o';
      }
      starButtons.push(
        <Button
          activeOpacity={0.20}
          disabled={this.props.disabled}
          key={i + 1}
          onPress={this.pressStarButton.bind(this, (i + 1))}
          style={{
            height: this.props.starSize,
            width: this.props.starSize,
          }}
        >
          <Icon
            name={starIcon}
            size={this.props.starSize}
            color={this.props.starColor}
            style={{
              height: this.props.starSize,
              width: this.props.starSize,
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
  },
});

var styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starButton: {
  },
  star: {
  },
});

module.exports = StarRating;
