import { StyledComponentProps, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { FlatList, View, Text } from 'react-native';
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
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text style={styles.tabText}>CHATS</Text>
        </View>
        <View style={[styles.tabInactive]}>
          <Text style={styles.tabTextInactive}>GROUPS</Text>
        </View>
      </View>
      <FlatList
        // contentContainerStyle={styles.listContainer}
        data={[
          {
            id: '1',
            name: 'Nimi Martins',
            time: '9:41 AM',
            avatar: 'ns',
            lastMessage: 'No last message',
          },
          {
            id: '2',
            name: 'Ini Adebanjo',
            time: '9:41 AM',
            avatar: 'ns',
            lastMessage: 'No last message',
          },
        ]}
        renderItem={Channel}
        ListEmptyComponent={<EmptyChannel navigation={navigation} />}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};
export default ChannelScreen;
