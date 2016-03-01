'use strict';

// React and react native imports
import React, {
  Component,
  PropTypes,
  StyleSheet,
  Image,
  View
} from 'react-native';

// Third party imports
import Button from 'react-native-button';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import ZocialIcons from 'react-native-vector-icons/Zocial';

const iconSets = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons
};

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
    this.props.selectedStar(rating);
    this.setState({
      rating: rating
    });
  }

  render() {
    var starsLeft = this.state.rating;
    const starButtons = [];
    for (var i = 0; i < this.state.maxStars; i++) {
      const Icon = iconSets[this.props.iconSet];
      var starImage = this.props.emptyStar;
      if (starsLeft >= 1) {
        starImage = this.props.fullStar;
      } else if (starsLeft === 0.5) {
        starImage = this.props.halfStar;
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
          <Icon
            name={starImage}
            size={this.props.starSize}
            color={this.props.starColor}
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
  iconSet: PropTypes.string,
  emptyStar: PropTypes.string,
  halfStar: PropTypes.string,
  fullStar: PropTypes.string
}

StarRating.defaultProps = {
  disabled: false,
  maxStars: 5,
  rating: 0,
  starColor: 'black',
  iconSet: 'FontAwesome',
  emptyStar: 'star-o',
  halfStar: 'star-half-o',
  fullStar: 'star'
}

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

module.exports = StarRating;
