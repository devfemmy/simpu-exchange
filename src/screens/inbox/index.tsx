import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelScreen from './channels';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
const InboxStack = createNativeStackNavigator<MainStackParamList>();

const InboxScreen = (): JSX.Element => {
  return (
    <InboxStack.Navigator
      initialRouteName={SCREEN_NAME.channel}
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
    </InboxStack.Navigator>
  );
};

export default InboxScreen;
