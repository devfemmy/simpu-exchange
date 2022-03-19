import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inbox from 'src/screens/inbox';
import { MainStackParamList, SCREEN_NAME } from './constants';
import Payment from 'src/screens/payment';
import Setting from 'src/screens/setting';
import Auth from 'src/screens/auth';

const Stack = createNativeStackNavigator<MainStackParamList>();
const BottomTab = createBottomTabNavigator();

function MainMenuScreens() {
  return (
    <BottomTab.Navigator initialRouteName={SCREEN_NAME.inbox}>
      <BottomTab.Screen name={SCREEN_NAME.inbox} component={Inbox} />
      <BottomTab.Screen name={SCREEN_NAME.inbox} component={Payment} />
      <BottomTab.Screen name={SCREEN_NAME.inbox} component={Setting} />
    </BottomTab.Navigator>
  );
}

export const RootStack = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={SCREEN_NAME.auth}
      component={Auth}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={SCREEN_NAME.main}
      component={MainMenuScreens}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
