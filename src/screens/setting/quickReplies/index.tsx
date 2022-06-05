import { useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Pressable, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Input } from 'src/components/common/CustomInput';
import { QuickReplyNavigationProp } from 'src/navigation/constants';
import { globalStyles } from 'src/styles';
import ArrowRight from '../../../assets/images/Arrow_Right.svg';
import styles from './styles';

const QuickReplies = () => {
  const navigation = useNavigation<QuickReplyNavigationProp>();
  const modalizeRef = useRef<Modalize>(null);
  const [editModal, setEditModal] = useState<boolean>(false);

  const openModal = () => {
    modalizeRef.current?.open();
  };
  const closeModal = () => {
    modalizeRef.current?.close();
    setEditModal(false);
  };
  const toggleToEditModal = () => {
    setEditModal(!editModal);
    openModal();
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.navHeader}
          onPress={openModal}
        >
          <Text style={styles.navText}>Add New</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleToEditModal}
        style={[styles.list, globalStyles.rowBetween]}
      >
        <Text>Sales reply</Text>
        <ArrowRight />
      </Pressable>
      <Pressable style={[styles.list, globalStyles.rowBetween]}>
        <Text>Test quick reply</Text>
        <ArrowRight />
      </Pressable>
      <Pressable style={[styles.list, globalStyles.rowBetween]}>
        <Text>Saved</Text>
        <ArrowRight />
      </Pressable>
      <Modalize
        withHandle
        withOverlay
        snapPoint={Dimensions.get('window').height / 1.2}
        modalHeight={Dimensions.get('window').height}
        ref={modalizeRef}
      >
        <View style={styles.modalize}>
          <View style={[globalStyles.rowBetween]}>
            <Text onPress={closeModal} style={styles.textColor}>
              Cancel
            </Text>
            <Text style={styles.textColor}>Save</Text>
          </View>
          <Text style={globalStyles.headerText2}>
            {editModal ? 'Edit your quick reply' : 'Create a quick reply'}
          </Text>
          <Text style={styles.message}>
            Save a message you send often for later.
          </Text>
          <Input placeholder="Name" />
          <Input placeholder="Quick Reply" />
        </View>
      </Modalize>
    </View>
  );
};

export default QuickReplies;
