import {Text, useStyleSheet} from '@ui-kitten/components';
import * as React from 'react';
import {Image, View} from 'react-native';
import {Button} from '../../../components/common/Button';
import {SafeAreaView} from '../../../components/common/SafeAreaView';
import {globalStyles} from '../../../styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import themedStyles from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.lowerContainer}>
        <Text style={globalStyles.headerText}>Welcome to Simpu!</Text>
        <Text style={globalStyles.lowerText}>
          Sync all your chats into one powerful inbox, Never miss a message
          again!
        </Text>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/images/onboard.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Auth')}
          style={styles.buttonStyle}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
