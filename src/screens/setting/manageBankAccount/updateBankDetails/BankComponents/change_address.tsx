import { Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { View } from 'react-native';
import { Input } from 'src/components/common/CustomInput';
import styles from './styles';
import { globalStyles } from 'src/styles';
import ArrowIcon from '../../../../../assets/images/arrow_down.svg';

const ChangeAddress = () => {
  const [countryCode, setCountryCode] = useState<any>('NG');
  const [country, setCountry] = useState('Nigeria');
  const onSelect = (data: any) => {
    setCountryCode(data.cca2);
    setCountry(data.name);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.addText}>
        Please, use your actual house address, not a P.O Box
      </Text>
      <View style={styles.addContainer}>
        <View style={[globalStyles.rowBetween, styles.addressContainer]}>
          <CountryPicker
            withCallingCode
            withFlag
            withFilter
            countryCode={countryCode}
            onSelect={onSelect}
            visible={false}
          />
          <View style={styles.countryCode}>
            <Text>{country}</Text>
            <ArrowIcon />
          </View>
        </View>
        <Input placeholder="Home Street Address" />
        <Input placeholder="City" />
        <Input placeholder="State" />
      </View>
    </View>
  );
};

export default ChangeAddress;
