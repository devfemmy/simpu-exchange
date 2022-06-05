import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { UpdateAccountScreenRouteProp } from 'src/navigation/constants';
import styles from '../../styles';
import BvnVerification from './BankComponents/bvnVerify';
import ChangeAddress from './BankComponents/change_address';
import ChangeName from './BankComponents/change_name';
import ChangePhone from './BankComponents/change_phone';
import Identification from './BankComponents/identification';

const UpdateBankDetails = () => {
  const route = useRoute<UpdateAccountScreenRouteProp>();
  const { name } = route.params;
  let comp;
  if (name === 'Your Name') {
    comp = <ChangeName />;
  } else if (name === 'Address') {
    comp = <ChangeAddress />;
  } else if (name === 'Phone Number') {
    comp = <ChangePhone />;
  } else if (name === 'Identification') {
    comp = <Identification />;
  } else {
    comp = <BvnVerification />;
  }
  return <View style={styles.container}>{comp}</View>;
};

export default UpdateBankDetails;
