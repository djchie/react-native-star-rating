// React and react native imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

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

  render() {
    const {
      iconSet,
      disabled,
      buttonStyle,
      starIconName,
      starSize,
      starColor,
      starStyle,
    } = this.props;

    const Icon = iconSets[iconSet];

    return (
      <Button
        activeOpacity={0.20}
        disabled={disabled}
        onPress={this.onButtonPress}
        containerStyle={buttonStyle}
      >
        <Icon
          name={starIconName}
          size={starSize}
          color={starColor}
          style={starStyle}
        />
      </Button>
    );
  }

}

StarButton.propTypes = {
  disabled: PropTypes.bool,
  rating: PropTypes.number,
  onStarButtonPress: PropTypes.func,
  iconSet: PropTypes.string,
  starSize: PropTypes.number,
  starIconName: PropTypes.string,
  starColor: PropTypes.string,
  starStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  halfStarEnabled: PropTypes.bool,
};

export default StarButton;
