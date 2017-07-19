// React and react native imports
import React, {
  Component
} from 'react';
import { View, ViewPropTypes, Image } from 'react-native';

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
import PropTypes from 'prop-types';

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
  }

  onButtonPress() {
    this.props.onStarButtonPress(this.props.rating);
  }

  render() {
      const Icon = iconSets[this.props.iconSet];
      const { starSize,starIconName,starColor,starStyle,buttonStyle,disabled } = this.props;
      return (
          <Button
              activeOpacity={0.20}
              disabled={disabled}
              onPress={this.onButtonPress}
              containerStyle={buttonStyle}
              style={{
                  height: starSize,
                  width: starSize,
              }}
          >
              { typeof starIconName ==='string'?
                  <Icon name={starIconName} size={starSize} color={starColor} style={starStyle}/> :
                  <Image source={starIconName} style={[{width:starSize,height:starSize,resizeMode:'contain'},starStyle]} />
              }
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
  starIconName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
  ]),
  starColor: PropTypes.string,
  starStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
};

export default StarButton;
