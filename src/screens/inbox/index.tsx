import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelScreen from './channels';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import ChatScreen from './chat';
const InboxStack = createNativeStackNavigator<MainStackParamList>();

const InboxScreen = (): JSX.Element => {
  return (
    <InboxStack.Navigator
      initialRouteName={SCREEN_NAME.chat}
      screenOptions={() => ({
        headerShown: true,
        headerShadowVisible: false,
      })}
    >
      <InboxStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.welcome}
        component={ChannelScreen}
      />
      <InboxStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.chat}
        component={ChatScreen}
      />
    </InboxStack.Navigator>
  );
};

export default InboxScreen;
