import {
  StyledComponentProps,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/common/Button';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import themedStyles from './styles';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { StackScreenProps } from '@react-navigation/stack';

interface Props
  extends StyledComponentProps,
    StackScreenProps<MainStackParamList, SCREEN_NAME.otp> {}

const OtpScreen = (props: Props): JSX.Element => {
  const { navigation } = props;
  const [code, setCode] = useState<string>('');
  const styles = useStyleSheet(themedStyles);
  const navigateToMain = useCallback(() => {
    navigation.navigate(SCREEN_NAME.main);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.lowerContainer}>
        <Text style={styles.headerText}>Verify Phone Number</Text>
        <Text style={styles.lowerText}>Please enter the 4 digit code sent</Text>

        <Text style={styles.lowerText}>to</Text>
        <Text style={styles.lowerText}>+234 50 123 4567</Text>
      </View>
      <View style={styles.formContainer}>
        <SmoothPinCodeInput
          cellStyle={styles.cellStyle}
          codeLength={4}
          cellSpacing={27}
          cellStyleFocused={styles.cellFocusedStyle}
          value={code}
          onTextChange={(value: string) => setCode(value)}
        />
      </View>
      <Text style={styles.otp}>Resend OTP</Text>
      <Button
        onPress={navigateToMain}
        style={styles.buttonStyle}
        title="Verify"
      />
      <Text style={styles.fineText}>
        By continuing you’re indicating that you accept our Terms of Use and our
        Privacy Policy
      </Text>
    </View>
  );
};
export default OtpScreen;
