// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/ExampleApp/',
  ],
  transformIgnorePatterns: ['/node_modules/(?!(@react-native|react-native)).*/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/ExampleApp/',
    '\\.snap$',
  ],
  cacheDirectory: '.jest/cache',
};
