import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './welcome';
import PhoneScreen from './phone';
import OtpScreen from './otp';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
const AuthStack = createNativeStackNavigator<MainStackParamList>();

const AuthScreen = (): JSX.Element => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_NAME.welcome}
      screenOptions={() => ({
        headerShown: true,
        headerShadowVisible: false,
      })}
    >
      <AuthStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.welcome}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.phone}
        component={PhoneScreen}
      />
      <AuthStack.Screen
        options={{ title: '' }}
        name={SCREEN_NAME.otp}
        component={OtpScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
