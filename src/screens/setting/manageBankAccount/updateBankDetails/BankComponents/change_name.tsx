import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { Input } from 'src/components/common/CustomInput';
import styles from './styles';

const ChangeName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addText}>Edit your account name here</Text>
      <View style={styles.addContainer}>
        <Input placeholder="Legal First Name" />
        <Input placeholder="Legal Middle Name" />
        <Input placeholder="Legal Last Name" />
      </View>
    </View>
  );
};

export default ChangeName;
