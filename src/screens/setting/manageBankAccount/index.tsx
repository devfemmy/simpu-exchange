import { Text } from '@ui-kitten/components';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Labellist from 'src/components/common/Label';
import { globalStyles } from 'src/styles';
import styles from '../styles';
import ArrowRight from '../../../assets/images/Arrow_Right.svg';
import UserIcon from '../../../assets/images/User.svg';
import AddressIcon from '../../../assets/images/Home_Address.svg';
import NumberPad from '../../../assets/images/Number_Pad.svg';
import EmailIcon from '../../../assets/images/Email.svg';
import Identity from '../../../assets/images/Identification_Documents.svg';
import VerifiedAccount from '../../../assets/images/Verified_Account.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList, SCREEN_NAME } from 'src/navigation/constants';

interface Props
  extends NativeStackScreenProps<
    MainStackParamList,
    SCREEN_NAME.manageaccount
  > {}
const ManageBankAccount = (props: Props) => {
  const { navigation } = props;
  const navigateUpdateDetails = React.useCallback(
    (screenName: string) => {
      return navigation.navigate(SCREEN_NAME.updateaccount, {
        name: screenName,
      });
    },
    [navigation],
  );
  return (
    <View style={styles.container}>
      <Pressable style={[styles.nameContainer, globalStyles.colBetween]}>
        <Image
          style={styles.onboardImage}
          source={require('../../../assets/images/profile.png')}
        />
        <Text style={styles.headerText}>Collins Iheagwara</Text>
        <Text style={styles.lowerText}>12345678903</Text>
        <Text style={styles.lowerText}>Polaris Bank</Text>
      </Pressable>
      <View style={styles.cardList}>
        <Labellist
          onPress={() => navigateUpdateDetails('Your Name')}
          icon2={<ArrowRight />}
          icon1={<UserIcon />}
          text="Collins Iheagwara"
          text2="Account Name"
        />
      </View>
      <View style={styles.cardList}>
        <Labellist
          onPress={() => navigateUpdateDetails('Address')}
          icon2={<ArrowRight />}
          icon1={<AddressIcon />}
          text="32, Abiodun Odeseye Gbagada"
          text2="Address"
        />
      </View>
      <View style={styles.cardList}>
        <Labellist
          onPress={() => navigateUpdateDetails('Phone Number')}
          icon2={<ArrowRight />}
          icon1={<NumberPad />}
          text="+234 811 746 1318"
          text2="Phone number"
        />
      </View>
      <View style={styles.cardList}>
        <Labellist
          icon2={<ArrowRight />}
          icon1={<EmailIcon />}
          text="Collins@simpu.co"
          text2="Email Address"
        />
      </View>
      <View style={styles.cardList}>
        <Labellist
          onPress={() => navigateUpdateDetails('Identification')}
          icon2={<ArrowRight />}
          icon1={<Identity />}
          text="Not completed"
          text2="Identification"
        />
      </View>
      <View style={styles.cardList}>
        <Labellist
          onPress={() => navigateUpdateDetails('BVN Verification')}
          icon2={<ArrowRight />}
          icon1={<VerifiedAccount />}
          text="Not completed"
          text2="Bvn Verification"
        />
      </View>
    </View>
  );
};

export default ManageBankAccount;
