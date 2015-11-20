# React Native Star Rating Component

> A React Native component for generating and displaying interactive star ratings.

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installation](#installation)
    1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

Install the package via `npm install react-native-star-rating --save`. Then require it in your JavaScript file via `require('react-native-star-rating')`. Check out an example usage below:

```js
var StarRating = require('react-native-star-rating');

var ExampleComponent = React.createClass({
  onStarRatingPress: function (value) {
    console.log('Rated ' + value + ' stars!');
  },
  render() {
    return (
      <StarRating 
        maxStars={5}
        rating={3.5}
        disabled={false}
        starSize={15}
        selectedStar={this.onStarRatingPress}
      />
    );
  }
});

module.exports = ExampleComponent;
```

## Requirements

- Node

## Development

### Installation

```sh
npm install react-native-star-rating --save
```

### Roadmap

View the project roadmap [here](https://github.com/djchie/react-native-star-rating/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.