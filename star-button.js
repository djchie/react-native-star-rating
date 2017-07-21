// React and react native imports
import React, {
  Component,
  PropTypes,
} from 'react';
import { View } from 'react-native';

import {
  View,
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

  onButtonPress() {
    this.props.onStarButtonPress(this.props.rating);
  }

  render() {
    const Icon = iconSets[this.props.iconSet];

    return (
      <Button
        activeOpacity={0.20}
        disabled={this.props.disabled}
        onPress={this.onButtonPress}
        containerStyle={this.props.buttonStyle}
        style={{
          height: this.props.starSize,
          width: this.props.starSize,
        }}
      >
        <View
          style={{
            width: this.props.buttonWidth || this.props.buttonSize || this.props.starSize,
            height: this.props.buttonHeight || this.props.buttonSize || this.props.starSize,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <Icon
            name={this.props.starIconName}
            size={this.props.starSize}
            color={this.props.starColor}
            style={this.props.starStyle}
          />
        </View>
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
  buttonSize: PropTypes.number,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  starIconName: PropTypes.string,
  starColor: PropTypes.string,
  starStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
};

export default StarButton;
