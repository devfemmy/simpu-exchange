import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Channel = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Avatar
        source={require('src/assets/images/avatar.png')}
        size={'medium'}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.channelName}>Nimi Martins</Text>
          <Text style={styles.channelTime}>9:40 AM</Text>
        </View>
        <Text style={styles.description}>
          My Dress has been delivered. i Love it
        </Text>
      </View>
    </View>
  );
};
export default Channel;
