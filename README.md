# React Native Star Rating Component

> A React Native component for generating and displaying interactive star ratings. Compatible with both iOS and Android.

## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
  1. [Props](#props)
  1. [General Star Example](#general-star-example)
  1. [Custom Star Example](#custom-star-example)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Installation

```sh
npm install react-native-star-rating --save
```

And then set up [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for your project.

## Usage

### Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`disabled`**|`bool`|Sets the interactivity of the star buttons. |`No`|`false`|
|**`emptyStar`**|`string`|The name of the icon to represent an empty star. Refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). |`No`|`star-o`|
|**`fullStar`**|`string`|The name of the icon to represent a full star. Refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). |`No`|`star`|
|**`halfStar`**|`string`|The name of the icon to represent an half star. Refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).  |`No`|`star-half-o`|
|**`iconSet`**|`string`|The name of the icon set the star image belongs to. Refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).  |`No`|`FontAwesome`|
|**`maxStars`**|`number`|The maximum number of stars possible. |`No`|`5`|
|**`rating`**|`number`|The current rating to show.  |`No`|`0`|
|**`selectedStar`**|`function`|A function to handle star button presses. |`Yes`|*None*|
|**`starColor`**|`string`|Color of a filled star. |`No`|`black`|
|**`emptyStarColor`**|`string`|Color of an empty star. |`No`|`gray`|
|**`starSize`**|`number`|Size of the star. |`No`|`40`|
|**`buttonSize`**|`number`|Size of the button hit area. |`No`|`starSize`|
|**`buttonWidth`**|`number`|Width of the button hit area. |`No`|`buttonSize`|
|**`buttonHeight`**|`number`|Height of the button hit area. |`No`|`buttonSize`|

For the `emptyStar`, `fullStar`, `halfStar`, and `iconSet` props, please refer to the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) package for the valid `string` names for the star icons. When selecting the icon `string` names, you must remember to remove the font family name before the first hyphen. For example, if you want to use the `ion-ios-star` from the Ionicon font set, you would set the `fullStar` prop to `ios-star` and the `iconSet` to `Ionicons`.

### General Star Example

The following example will render 3.5 stars out of 5 stars using the `star-o` for the empty star icon, `star-half-o` for the half star icon, and `star` for the full star icon from the `FontAwesome` icon set in black color.

```js
import StarRating from 'react-native-star-rating';

class GeneralStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating 
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default GeneralStarExample
```

<p align="center">
  <img src="https://github.com/djchie/react-native-star-rating/blob/master/assets/general-star-demo.gif" alt="General Star Example" width="336" height="600"/>
</p>

### Custom Star Case

The following example will render 2.5 stars out of 7 stars using the `ios-star-outline` for the empty star icon, `ios-star-half` for the half star icon, and `ios-star` for the full star icon from the `Ionicons` icon set in red color.

```js
import StarRating from 'react-native-star-rating';

class CustomStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating 
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={7}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'red'}
      />
    );
  }
}

export default CustomStarExample
```

<p align="center">
  <img src="https://github.com/djchie/react-native-star-rating/blob/master/assets/custom-star-demo.gif" alt="Custom Star Example" width="336" height="600"/>
</p>

### Roadmap

View the project roadmap [here](https://github.com/djchie/react-native-star-rating/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
