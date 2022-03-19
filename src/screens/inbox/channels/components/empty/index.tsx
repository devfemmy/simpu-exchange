import { Button, StyledComponentProps } from '@ui-kitten/components';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import EmpChannel from 'src/assets/images/emptyChannel.svg';
import { SCREEN_NAME } from 'src/navigation/constants';
import styles from './styles';

interface Props extends StyledComponentProps {
  navigation: any;
}

const EmptyChannel = (props: Props): JSX.Element => {
  const { navigation } = props;
  const navigateToChannel = useCallback(() => {
    navigation.navigate(SCREEN_NAME.channel);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <EmpChannel />
      <Text style={styles.emptyText}>
        Looks like you have not connected any channel to your inbox yet, get
        started in settings
      </Text>
      <Button style={styles.buttonStyle} onPress={navigateToChannel}>
        <Text style={styles.buttonText}>Connect channels</Text>
      </Button>
    </View>
  );
};
export default EmptyChannel;
