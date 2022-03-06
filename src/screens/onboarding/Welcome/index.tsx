import {Text} from '@ui-kitten/components';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button} from '../../../components/common/Button';
import {SafeAreaView} from '../../../components/common/SafeAreaView';
import {globalStyles} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../utils';

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
const styles = StyleSheet.create({
  lowerContainer: {
    marginVertical: wp(0),
    paddingHorizontal: wp(20),
  },
  imageStyle: {
    height: '75%',
    resizeMode: 'contain',
    marginTop: hp(20),
  },
  buttonContainer: {
    marginHorizontal: 30,
  },
  buttonStyle: {
    width: '100%',
  },
});
export default WelcomeScreen;
