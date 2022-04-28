import {
  StyledComponentProps,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/common/Button';
import { SafeAreaView } from '../../../components/common/SafeAreaView';
import { KeyboardAwareScrollView } from '../../../components/common/KeyBoardAvoidingView';
import PhoneInput from 'react-native-phone-number-input';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import themedStyles from './styles';
interface Props
  extends StyledComponentProps,
    NativeStackScreenProps<MainStackParamList, SCREEN_NAME.phone> {}
const PhoneScreen = (props: Props) => {
  const styles = useStyleSheet(themedStyles);
  const { navigation } = props;
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [, setFormattedValue] = useState('');

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.lowerContainer}>
          <Text style={styles.headerText}>Verify Phone Number</Text>
          <Text style={styles.lowerText}>
            Simpu will send you an SMS to verify your phone number
          </Text>
        </View>
        <View style={styles.formContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
        <Button
          onPress={() => navigation.navigate(SCREEN_NAME.otp)}
          style={styles.buttonStyle}
          title="Next"
        />
        <Text style={styles.fineText}>
          By continuing you’re indicating that you accept our Terms of Use and
          our Privacy Policy
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PhoneScreen;
