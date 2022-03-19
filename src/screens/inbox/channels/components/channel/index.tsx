import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Channel = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.channelName}>Name</Text>
          <Text style={styles.channelTime}>time</Text>
        </View>
        <Text style={styles.description}>
          My Dress has been delivered. i Love it
        </Text>
      </View>
    </View>
  );
};
export default Channel;
