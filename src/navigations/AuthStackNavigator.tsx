import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import WelcomeScreen from '../screens/onboarding/Welcome';
import AuthScreen from '../screens/onboarding/Auth';
import Otp from '../screens/onboarding/Otp';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = (): JSX.Element => {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AuthStack.Screen
        options={{title: ''}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="Otp" component={Otp} />
    </AuthStack.Navigator>
  );
};
