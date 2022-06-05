import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'src/components/common/Button';
import { Input } from 'src/components/common/CustomInput';
import styles from './styles';

const BvnVerification = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.addText}>
          We need your BVN and a valid identification type to confirm who you
          are
        </Text>
        <Text style={styles.desc}>
          We will send a code to the phone number linked to your BVN, if you do
          not have access to that number, skip this step.
        </Text>
        <View style={styles.addContainer}>
          <Input placeholder="Your BVN" />
        </View>
      </ScrollView>
      <View style={styles.relativeContainer}>
        <Button title="Submit" />
      </View>
    </View>
  );
};

export default BvnVerification;
