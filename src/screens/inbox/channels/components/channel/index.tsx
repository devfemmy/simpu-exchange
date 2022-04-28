import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { ChatItem } from 'src/services/api/chat';
import styles from './styles';

const ChannelItem = (props: ChatItem): JSX.Element => {
  console.log('props', props);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(SCREEN_NAME.chat)}
    >
      <Avatar
        source={require('src/assets/images/avatar.png')}
        size={'medium'}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.channelName}>{props.name}</Text>
          <Text style={styles.channelTime}>{props.time}</Text>
        </View>
        <Text style={styles.description}>
          My Dress has been delivered. i Love it
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Channel = ({ item }: ListRenderItemInfo<ChatItem>) => {
  console.log('item', item);
  return (
    <ChannelItem
      id={item.id}
      name={item.name}
      avatar={item.avatar}
      lastMessage={item.lastMessage}
      time={item.time}
    />
  );
};
export default Channel;
