import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import coalesceNonElementChildren from './coalesceNonElementChildren';

const systemButtonOpacity = 0.2;

export default class Button extends Component {
  render() {
    const touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
    };
    const containerStyle = [
      this.props.containerStyle,
      this.props.disabled ? this.props.disabledContainerStyle : null,
    ];

    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
      touchableProps.delayPressIn = this.props.delayPressIn;
      touchableProps.delayPressOut = this.props.delayPressOut;
      touchableProps.delayLongPress = this.props.delayLongPress;
    }

    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          {...touchableProps}
          testID={this.props.testID}
          style={containerStyle}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityRole="button"
        >
          {this._renderGroupedChildren()}
        </TouchableOpacity>
      );
    }
    const background = this.props.androidBackground
      ? this.props.androidBackground
      : TouchableNativeFeedback.SelectableBackground();

    let padding = 0;
    if (containerStyle[0] && containerStyle[0].padding) {
      padding = containerStyle[0].padding;
      const fixedStyle = { ...containerStyle[0], padding: 0 };
      containerStyle[0] = fixedStyle;
    }

    return (
      <View style={containerStyle}>
        <TouchableNativeFeedback
          {...touchableProps}
          style={{ flex: 1 }}
          testID={this.props.testID}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityRole="button"
          background={background}
        >
          <View style={{ padding }}>
            {this._renderGroupedChildren()}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  _renderGroupedChildren() {
    const { disabled } = this.props;
    const style = [
      styles.text,
      disabled ? styles.disabledText : null,
      this.props.style,
      disabled ? this.props.styleDisabled : null,
    ];
    const childGroupStyle = [
      styles.group,
      this.props.childGroupStyle,
    ];

    const children = coalesceNonElementChildren(this.props.children, (children, index) => (
      <Text key={index} style={style} allowFontScaling={this.props.allowFontScaling}>
        {children}
      </Text>
    ));

    switch (children.length) {
      case 0:
        return null;
      case 1:
        return children[0];
      default:
        return <View style={childGroupStyle}>{children}</View>;
    }
  }

  _computeActiveOpacity() {
    if (this.props.disabled) {
      return 1;
    }
    return this.props.activeOpacity != null
      ? this.props.activeOpacity
      : systemButtonOpacity;
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#007aff',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  disabledText: {
    color: '#dcdcdc',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
