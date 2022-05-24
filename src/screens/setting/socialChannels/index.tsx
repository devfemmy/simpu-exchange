import { Text, Toggle } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import Labellist from 'src/components/common/Label';
import { globalStyles } from 'src/styles';
import styles from './styles';
import WhatsappIcon from '../../../assets/images/whatsapp.svg';
import TwitterIcon from '../../../assets/images/twitter.svg';
import FbIcon from '../../../assets/images/fb_messenger.svg';
import AddIcon from '../../../assets/images/add.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';

interface Props
  extends NativeStackScreenProps<
    MainStackParamList,
    SCREEN_NAME.connectsocials
  > {}
const SocialChannels = (props: Props) => {
  const { navigation } = props;
  const [checked, setChecked] = React.useState(false);
  const [messenger, setMessenger] = React.useState(false);
  const [twitter, setTwitterCheck] = React.useState(false);

  const navigateConnectSocials = React.useCallback(
    (screenName: string) => {
      return navigation.navigate(SCREEN_NAME.connectsocials, {
        name: screenName,
      });
    },
    [navigation],
  );
  return (
    <View style={styles.container}>
      <View style={globalStyles.shadowCard}>
        <Labellist
          borderBottom
          text2="Connect Whatsapp to your Simpu inbox"
          icon2={
            <Toggle checked={checked} onChange={() => setChecked(!checked)} />
          }
          icon1={<WhatsappIcon />}
          text="Whatsapp"
        />
        <Pressable
          onPress={() => navigateConnectSocials('Connect Whatsapp')}
          style={[globalStyles.rowStart, styles.addContainer]}
        >
          <AddIcon />
          <Text style={styles.addText}>ADD</Text>
        </Pressable>
      </View>
      <View style={globalStyles.shadowCard}>
        <Labellist
          borderBottom
          text2="Connect Messenger to your Simpu inbox"
          icon2={
            <Toggle
              checked={messenger}
              onChange={() => setMessenger(!messenger)}
            />
          }
          icon1={<FbIcon />}
          text="Messenger"
        />
        <Pressable
          onPress={() => navigateConnectSocials('Connect Messenger')}
          style={[globalStyles.rowStart, styles.addContainer]}
        >
          <AddIcon />
          <Text style={styles.addText}>ADD</Text>
        </Pressable>
      </View>
      <View style={globalStyles.shadowCard}>
        <Labellist
          borderBottom
          text2="Connect Twitter to your Simpu inbox"
          icon2={
            <Toggle
              checked={twitter}
              onChange={() => setTwitterCheck(!twitter)}
            />
          }
          icon1={<TwitterIcon />}
          text="Twitter"
        />
        <Pressable
          onPress={() => navigateConnectSocials('Connect Twitter')}
          style={[globalStyles.rowStart, styles.addContainer]}
        >
          <AddIcon />
          <Text style={styles.addText}>ADD</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SocialChannels;
