import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './AuthStackNavigator';

const NavContainerComponent = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default NavContainerComponent;
