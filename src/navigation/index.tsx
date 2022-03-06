/* eslint-disable import/prefer-default-export */
import * as React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Inbox from 'src/screens/inbox';


import {
  MainStackParamList,
  SCREEN_NAME,
  isLargeScreen,
} from './constants';

const Stack = createStackNavigator<MainStackParamList>();


export const RootStack = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREEN_NAME.inbox} component={Inbox} />
    </Stack.Navigator>
);
