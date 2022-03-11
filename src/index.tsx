import React, {useCallback, useEffect, useRef} from 'react';

import * as eva from '@eva-design/eva';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme.json';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';
import {Provider} from 'react-redux';
import {persistor, store} from 'src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {MainStackParamList} from './navigation/constants';
import {RootStack} from './navigation';

export default (): JSX.Element => {
  const navigationRef =
    useRef<NavigationContainerRef<MainStackParamList>>(null);
  const routeNameRef = useRef<string>();

  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }, [routeNameRef, navigationRef]);

  useEffect(() => {
    const init = async () => {
      return true;
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);
  return (
    <Provider store={store}>
      <IconRegistry icons={[EvaIconsPack]} />
      <PersistGate persistor={persistor}>
        <UIKittenProvider {...eva} theme={{...eva.light, ...theme}}>
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer ref={navigationRef} onReady={onReady}>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </UIKittenProvider>
      </PersistGate>
    </Provider>
  );
};
