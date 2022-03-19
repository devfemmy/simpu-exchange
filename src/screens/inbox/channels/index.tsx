import { StyledComponentProps, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { FlatList, View } from 'react-native';
import EmptyChannel from './components/empty';
import themedStyles from './styles';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Channel from './components/channel';
interface Props
  extends StyledComponentProps,
    NativeStackScreenProps<MainStackParamList, SCREEN_NAME.channel> {}

const ChannelScreen = (props: Props): JSX.Element => {
  const { navigation } = props;
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <FlatList
        // contentContainerStyle={styles.listContainer}
        data={[{ id: '1' }, { id: '2' }]}
        renderItem={Channel}
        ListEmptyComponent={<EmptyChannel navigation={navigation} />}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};
export default ChannelScreen;