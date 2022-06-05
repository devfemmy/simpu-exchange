import { Text } from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';

const ChangePhone = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [, setFormattedValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.addText}>Please, type in your new number</Text>
      <View style={styles.addContainer}>
        <View style={styles.phoneContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            autoFocus
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePhone;
