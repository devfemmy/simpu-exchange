import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelScreen from './channels';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import ChatScreen from './chat';
const InboxStack = createNativeStackNavigator<MainStackParamList>();

const InboxScreen = (): JSX.Element => {
  return (
    <InboxStack.Navigator
      initialRouteName={SCREEN_NAME.channel}
      screenOptions={() => ({
        headerShown: false,
        headerShadowVisible: false,
        headerBackVisible: true,
      })}
    >
      <InboxStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.channel}
        component={ChannelScreen}
      />
      <InboxStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.chat}
        key={SCREEN_NAME.chat}
        component={ChatScreen}
      />
    </InboxStack.Navigator>
  );
};

export default InboxScreen;
