/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inbox from 'src/screens/inbox';
import { MainStackParamList, SCREEN_NAME } from './constants';
import Payment from 'src/screens/payment';
import Setting from 'src/screens/setting';
import Auth from 'src/screens/auth';
import ChatTab from 'src/assets/images/chat.svg';
import SettingTab from 'src/assets/images/setting.svg';
import SettingInactiveTab from 'src/assets/images/settingInactive.svg';
import SimpuPay from 'src/assets/images/simpupay.svg';
import FONTS from 'src/constants/fonts';
import { Avatar } from '@ui-kitten/components';

const Stack = createNativeStackNavigator<MainStackParamList>();
const BottomTab = createBottomTabNavigator();

type SimpuTabProps = {
  focused: boolean;
  color: string;
  size: number;
  Comp: React.FC;
  CompInverse: React.FC;
};

const SimpuTab = (props: SimpuTabProps) => {
  const { focused, Comp, CompInverse } = props;
  return focused ? <Comp /> : <CompInverse />;
};

const HeaderLeft = () => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 16,
      }}
    >
      <Avatar source={require('src/assets/images/Oval.png')} size="medium" />
    </TouchableOpacity>
  );
};

const HeaderRight = () => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 16,
      }}
    >
      <Avatar source={require('src/assets/images/Edit.png')} size="medium" />
    </TouchableOpacity>
  );
};
function MainMenuScreens() {
  return (
    <BottomTab.Navigator
      initialRouteName={SCREEN_NAME.inbox}
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name={SCREEN_NAME.settings}
        component={Setting}
        options={{
          title: 'Settings',
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: FONTS.PRO_SEMI_BOLD,
            fontSize: 17,
            color: '#1B1212',
          },
          tabBarIcon: props => (
            <SimpuTab
              {...props}
              Comp={SettingTab}
              CompInverse={SettingInactiveTab}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.inbox}
        component={Inbox}
        options={{
          title: 'Chats',
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: FONTS.PRO_SEMI_BOLD,
            fontSize: 17,
            color: '#1B1212',
          },
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
          tabBarIcon: props => (
            <SimpuTab {...props} Comp={ChatTab} CompInverse={ChatTab} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.simpupay}
        component={Payment}
        options={{
          title: 'Simpu Pay',
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: FONTS.PRO_SEMI_BOLD,
            fontSize: 17,
            color: '#1B1212',
          },
          tabBarIcon: props => (
            <SimpuTab {...props} Comp={SimpuPay} CompInverse={SimpuPay} />
          ),
        }}
      />
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
