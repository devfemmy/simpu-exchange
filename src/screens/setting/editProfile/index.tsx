import React from 'react';
import { Text, Input } from '@ui-kitten/components';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { globalStyles } from 'src/styles';
import CameraIcon from '../../../assets/images/camera.svg';
import FloatLabel from 'src/components/common/FloatLabel';
import ArrowRight from '../../../assets/images/Arrow_Right.svg';

const EditProfile = () => {
  const [firstName, setFirstName] = React.useState('Collins');
  const [lastName, setLastName] = React.useState('Joe');
  return (
    <View style={styles.container}>
      <View style={[globalStyles.rowBetween, styles.profileContainer]}>
        <View style={styles.overLay}>
          <Image
            style={styles.imageStyle}
            source={require('../../../assets/images/profile.png')}
          />
          <View style={styles.cameraStyle}>
            <CameraIcon />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={globalStyles.addedBorder}>
            <Input
              style={styles.inputStyle}
              textStyle={styles.textStyle}
              value={firstName}
              placeholderTextColor="#C7C7CC"
              placeholder="First Name"
              selectionColor={'#3525E6'}
              keyboardType="default"
              onChangeText={nextValue => setFirstName(nextValue)}
            />
          </View>
          <View>
            <Input
              style={styles.inputStyle}
              textStyle={styles.textStyle}
              value={lastName}
              placeholder="Last Name"
              placeholderTextColor="#C7C7CC"
              selectionColor={'#3525E6'}
              keyboardType="default"
              onChangeText={nextValue => setLastName(nextValue)}
            />
          </View>
        </View>
      </View>
      <Text style={styles.nameText}>
        Enter your name and add an optional profile photo.
      </Text>
      <View style={styles.card}>
        <FloatLabel
          text2="+234 202 555 0147"
          icon2={<ArrowRight />}
          text="Change Number"
        />
        <FloatLabel
          border
          text2="@Collins_iheagwara"
          icon2={<ArrowRight />}
          text="Username"
        />
      </View>
      <View style={styles.card}>
        <FloatLabel text2="" icon2={<ArrowRight />} text="Change Password" />
        <FloatLabel
          border
          text2=""
          icon2={<ArrowRight />}
          text="Change Email Address"
        />
      </View>
      <View style={[styles.card, globalStyles.rowCenter]}>
        <Pressable>
          <Text style={styles.logOut}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditProfile;
