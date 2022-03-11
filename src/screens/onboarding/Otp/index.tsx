import {Text} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../../components/common/Button';
import {SafeAreaView} from '../../../components/common/SafeAreaView';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {globalStyles} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../utils';
import PhoneInput from 'react-native-phone-number-input';
import {KeyboardAwareScrollView} from '../../../components/common/KeyBoardAvoidingView';

const Otp = () => {
  const [code, setCode] = React.useState('');
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.lowerContainer}>
          <Text style={globalStyles.headerText}>Verify Phone Number</Text>
          <Text style={globalStyles.lowerText}>
            Please enter the 4 digit code sent to +234 50 123 4567
          </Text>
        </View>
        <View style={styles.formContainer}>
          <SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: '#898989',
            }}
            codeLength={6}
            cellStyleFocused={{
              borderColor: 'black',
            }}
            value={code}
            onTextChange={(value: string) => setCode(value)}
          />
        </View>
        <Text style={styles.otp}>Resend OTP</Text>
        <Button
          onPress={() => null}
          style={styles.buttonStyle}
          title="Verify"
        />
        <Text style={[globalStyles.lowerText, styles.margin]}>
          By continuing you’re indicating that you accept our Terms of Use and
          our Privacy Policy
        </Text>
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
  otp: {
    textAlign: 'center',
    color: '#3525E6',
    marginBottom: 15,
  },
  buttonStyle: {
    width: '100%',
  },
  margin: {
    marginVertical: 20,
  },
});
export default Otp;
