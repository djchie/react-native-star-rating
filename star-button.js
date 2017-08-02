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
    let addition = 0;

    if (this.props.halfStarEnabled) {
      const firstHalf = event.nativeEvent.locationX < this.props.starSize / 2;
      addition = firstHalf ? -0.5 : 0;
    }

    this.props.onStarButtonPress(this.props.rating + addition);
  }

  render() {
    const Icon = iconSets[this.props.iconSet];
    const buttonStyle = {
      height: this.props.starSize,
      width: this.props.starSize,
    };

    return (
      <Button
        activeOpacity={0.20}
        disabled={this.props.disabled}
        onPress={this.onButtonPress}
        containerStyle={this.props.buttonStyle}
        style={buttonStyle}
      >
        <Icon
          name={this.props.starIconName}
          size={this.props.starSize}
          color={this.props.starColor}
          style={this.props.starStyle}
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
