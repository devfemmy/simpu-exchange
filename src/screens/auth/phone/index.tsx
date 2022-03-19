import { StyledComponentProps, Text } from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../../components/common/Button';
import { SafeAreaView } from '../../../components/common/SafeAreaView';
import { globalStyles } from '../../../styles';
import { hp, wp } from '../../../utils';
import { KeyboardAwareScrollView } from '../../../components/common/KeyBoardAvoidingView';
import PhoneInput from 'react-native-phone-number-input';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props
  extends StyledComponentProps,
    NativeStackScreenProps<MainStackParamList, SCREEN_NAME.phone> {}
const AuthScreen = (props: Props) => {
  const { navigation } = props;
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [, setFormattedValue] = useState('');

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
