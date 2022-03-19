module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    setupFiles: [
      './node_modules/react-native-gesture-handler/jestSetup.js',
      '<rootDir>/jest-setup.js',
    ],
    transformIgnorePatterns: [
      'node_modules/(?!(@react-native|react-native|@react-native-community|react-native-animatable| react-native-smooth-pincode-input|react-native-google-places-autocomplete|react-native-fast-image|react-native-reanimated|@react-native-firebase/messaging|@gorhom/bottom-sheet|@notifee/react-native|react-native-iphone-x-helper|@react-navigation/.*|react-native-flipper|@ui-kitten|react-native-vector-icons|instabug-reactnative|react-native-modal|react-native-keyboard-aware-scroll-view|react-native-geolocation-service|react-native-phone-number-input|react-native-country-picker-modal|@stripe/stripe-react-native|react-native-responsive-screen|react-native-dashed-line)/)',
    ],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    },
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  };
  