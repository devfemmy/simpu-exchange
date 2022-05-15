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
import SimpuPayActive from 'src/assets/images/bc.svg';
import SettingTab from 'src/assets/images/setting.svg';
import SettingInactiveTab from 'src/assets/images/settingInactive.svg';
import SimpuPay from 'src/assets/images/simpupay.svg';
import FONTS from 'src/constants/fonts';
import { Avatar } from '@ui-kitten/components';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import ReviewRequest from 'src/screens/payment/reviewRequest';
import { hp } from 'src/utils';
import Requests from 'src/screens/payment/requests';
import EditProfile from 'src/screens/setting/editProfile';
import Privacy from 'src/screens/setting/privacy';
import DataStorage from 'src/screens/setting/storage';

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
  // const route = useRoute();
  return (
    <BottomTab.Navigator
      initialRouteName={SCREEN_NAME.inbox}
      screenOptions={({ route }) => ({
        headerStyle: {
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor:
            route.name === 'app.screen.simpupay' ? '#3525E6' : 'white',
        },
        tabBarIcon: props => {
          if (route.name === 'app.screen.simpupay') {
            return (
              <SimpuTab
                {...props}
                Comp={SimpuPayActive}
                CompInverse={SimpuPay}
              />
            );
          } else if (route.name === 'app.screen.settings') {
            return (
              <SimpuTab
                {...props}
                Comp={SettingTab}
                CompInverse={SettingInactiveTab}
              />
            );
          } else {
            return <SimpuTab {...props} Comp={ChatTab} CompInverse={ChatTab} />;
          }
        },
      })}
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
          // tabBarIcon: props => (
          //   <SimpuTab {...props} Comp={ChatTab} CompInverse={ChatTab} />
          // ),
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
            backgroundColor: '#3525E6',
          },
          headerTitleStyle: {
            fontFamily: FONTS.PRO_SEMI_BOLD,
            fontSize: 17,
            color: '#fff',
          },
          // tabBarIcon: props => (
          //   <SimpuTab {...props} Comp={SimpuPay} CompInverse={SimpuPay} />
          // ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const MainStack = createStackNavigator<MainStackParamList>();
const MainStackNavigator = (): JSX.Element => {
  return (
    <MainStack.Navigator
      // initialRouteName="Profile"
      screenOptions={() => ({
        headerShown: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: hp(16),
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#211791',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <MainStack.Screen
        name={SCREEN_NAME.inbox}
        component={MainMenuScreens}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name={SCREEN_NAME.reviewpay}
        component={ReviewRequest}
        options={() => ({
          title: 'Review Payment Request',
        })}
      />
      <MainStack.Screen
        name={SCREEN_NAME.request}
        component={Requests}
        options={() => ({
          title: 'Requests',
        })}
      />
      <MainStack.Screen
        name={SCREEN_NAME.editprofile}
        component={EditProfile}
        options={() => ({
          title: 'Edit Profile',
        })}
      />
      <MainStack.Screen
        name={SCREEN_NAME.privacy}
        component={Privacy}
        options={() => ({
          title: 'Privacy and Security',
        })}
      />
      <MainStack.Screen
        name={SCREEN_NAME.datastorage}
        component={DataStorage}
        options={() => ({
          title: 'Data and Storage',
        })}
      />
    </MainStack.Navigator>
  );
};

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
      component={MainStackNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
