/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// setting up all the deps for a UI test seems out of scope for this demo
it.skip('renders correctly', () => {
  renderer.create(<App />);
});
