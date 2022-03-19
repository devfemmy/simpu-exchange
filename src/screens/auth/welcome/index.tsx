import {
  StyledComponentProps,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/common/Button';

import themedStyles from './styles';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Onboard from 'src/assets/images/onboarding.svg';
interface Props
  extends StyledComponentProps,
    NativeStackScreenProps<MainStackParamList, SCREEN_NAME.welcome> {}

const WelcomeScreen = (props: Props): JSX.Element => {
  const { navigation } = props;
  const styles = useStyleSheet(themedStyles);
  const navigateToAuth = useCallback(() => {
    console.log('to phone called');
    navigation.navigate(SCREEN_NAME.phone);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.lowerContainer}>
        <Text style={styles.headerText}>Welcome to Simpu!</Text>
        <Text style={styles.lowerText}>
          Sync all your chats into one powerful inbox, Never miss a message
          again!
        </Text>
        <Onboard />
      </View>
      <Button
        onPress={navigateToAuth}
        style={styles.buttonStyle}
        title="Get Started"
      />
    </View>
  );
};
export default WelcomeScreen;
