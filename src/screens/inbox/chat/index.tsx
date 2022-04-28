import { StyledComponentProps, useStyleSheet } from '@ui-kitten/components';
import uuid from 'react-native-uuid';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Chat, MessageType, defaultTheme } from '@flyerhq/react-native-chat-ui';
import themedStyles from './styles';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ChatInput from './components/chatInput';

interface Props
  extends StyledComponentProps,
    NativeStackScreenProps<MainStackParamList, SCREEN_NAME.chat> {}

const ChatScreen = (props: Props): JSX.Element => {
  const { navigation } = props;
  const styles = useStyleSheet(themedStyles);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigateToAuth = useCallback(() => {
    navigation.navigate(SCREEN_NAME.phone);
  }, [navigation]);

  const [messages, setMessages] = useState<MessageType.Any[]>([]);
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' };

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: String(uuid.v4()),
      text: message.text,
      type: 'text',
    };
    addMessage(textMessage);
  };

  return (
    <View style={styles.container}>
      <Chat
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        theme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            inputBackground: 'rgba(0,0,0,0.25)',
          },
        }}
      />
    </View>
  );
};
export default ChatScreen;
