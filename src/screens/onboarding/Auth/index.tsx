import {Input, Text} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../../components/common/Button';
import {SafeAreaView} from '../../../components/common/SafeAreaView';
import {globalStyles} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../utils';
import {KeyboardAwareScrollView} from '../../../components/common/KeyBoardAvoidingView';

const AuthScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.lowerContainer}>
          <Text style={globalStyles.headerText}>Verify Phone Number</Text>
          <Text style={globalStyles.lowerText}>
            Simpu will send you an SMS to verify your phone number
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input />
        </View>
        <Button
          onPress={() => navigation.navigate('Otp')}
          style={styles.buttonStyle}
          title="Next"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: wp(20),
    flex: 1,
    alignItems: 'center',
  },
  lowerContainer: {
    paddingHorizontal: wp(20),
  },
  formContainer: {
    marginVertical: 20,
    paddingHorizontal: hp(20),
    marginBottom: hp(50),
  },
  imageStyle: {
    height: '75%',
    resizeMode: 'contain',
    marginTop: hp(20),
  },
  buttonStyle: {
    width: '100%',
  },
});
export default AuthScreen;
