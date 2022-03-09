import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';
import NavContainerComponent from './src/navigations';

const App = (): JSX.Element => {
  useEffect(() => {
    const init = async () => {
      return true;
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);
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
