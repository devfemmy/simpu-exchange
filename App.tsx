import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';
import NavContainerComponent from './src/navigations';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavContainerComponent />
    </SafeAreaProvider>
  );
};

export default (): JSX.Element => {
  return (
    <UIKittenProvider {...eva} theme={eva.light}>
      <App />
    </UIKittenProvider>
  );
};
