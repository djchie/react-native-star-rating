// React and react native imports
import React, {
  Component,
  PropTypes,
} from 'react';
import { View } from 'react-native';

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
  Zocial: ZocialIcons,
};

class StarButton extends Component {

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  onButtonPress(eventData) {
    let addition = 0;

    if (this.props.acceptHalfStars) {
        const firstHalf = eventData.nativeEvent.locationX < this.props.starSize / 2;
        addition = firstHalf ? -0.5 : 0;
    }

    this.props.onStarButtonPress(this.props.rating + addition);
  }

  render() {
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
        {this.renderIcon()}
      </Button>
    );
  }

  renderIcon() {
    const Icon = iconSets[this.props.iconSet];

    if (typeof this.props.starIconName === 'string') {
      return (
        <Icon
          name={this.props.starIconName}
          size={this.props.starSize}
          color={this.props.starColor}
          style={this.props.starStyle}
        />
      );
    }

    return this.props.starIconName;
  }
}

StarButton.propTypes = {
  disabled: PropTypes.bool,
  rating: PropTypes.number,
  onStarButtonPress: PropTypes.func,
  iconSet: PropTypes.string,
  starSize: PropTypes.number,
  starIconName: PropTypes.any,
  starColor: PropTypes.string,
  starStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
  acceptHalfStars: PropTypes.bool
};

export default StarButton;
