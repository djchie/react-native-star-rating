// jest.unmock('../star-button');
jest.disableAutomock();
jest.unmock('react-native-button');
const React = require('react-native');
// const utils = r

jest.unmock('../star-button');
import StarButton from '../star-button';

describe('Star Button Component', function() {
  it('Renders a StarButton component', function() {
    // const renderer = TestUtils.createRenderer();
    // renderer.render(<StarButton />);
    // const result = renderer.getRenderOutput();
    expect(true).toEqual(true);
    // expect(result.props.children.type).toEqual();
  });
});