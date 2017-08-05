// React and react native imports
import React, {
  Component,
} from 'react';
import {
  ViewPropTypes,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import update from 'react-addons-update';

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
import MaterialCommunityIconsIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSets = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
  MaterialCommunityIcons: MaterialCommunityIconsIcons,
};

class StarButton extends Component {

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(event) {
    const {
      halfStarEnabled,
      starSize,
      rating,
      onStarButtonPress,
    } = this.props;

    let addition = 0;

    if (halfStarEnabled) {
      const isHalfSelected = event.nativeEvent.locationX < starSize / 2;
      addition = isHalfSelected ? -0.5 : 0;
    }

    onStarButtonPress(rating + addition);
  }

  renderIcon() {
    const {
      iconSet,
      starIconName,
      starSize,
      starColor,
      starStyle,
      reversed,
    } = this.props;

    const Icon = iconSets[iconSet];
    let iconElement;

    // To check if we need to reverse the star icon
    const newStarStyle = update(starStyle, {
      transform: {
        $set: [
          {
            scaleX: reversed ? -1 : 1,
          },
        ],
      },
    });

    if (typeof starIconName === 'string') {
      iconElement = (
        <Icon
          name={starIconName}
          size={starSize}
          color={starColor}
          style={newStarStyle}
        />
      );
    } else {
      const imageStyle = {
        width: starSize,
        height: starSize,
        resizeMode: 'contain',
      };

      const iconStyles = [
        imageStyle,
        newStarStyle,
      ];

      iconElement = (
        <Image
          source={starIconName}
          style={iconStyles}
        />
      );
    }

    return iconElement;
  }

  render() {
    const {
      disabled,
      buttonStyle,
    } = this.props;

    return (
      <Button
        activeOpacity={0.20}
        disabled={disabled}
        containerStyle={buttonStyle}
        onPress={this.onButtonPress}
      >
        {this.renderIcon()}
      </Button>
    );
  }

}

StarButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  onStarButtonPress: PropTypes.func.isRequired,
  iconSet: PropTypes.string.isRequired,
  starSize: PropTypes.number.isRequired,
  starIconName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
  starColor: PropTypes.string.isRequired,
  starStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  halfStarEnabled: PropTypes.bool.isRequired,
  reversed: PropTypes.bool.isRequired,
};

StarButton.defaultProps = {
  starStyle: {},
  buttonStyle: {},
};

export default StarButton;
