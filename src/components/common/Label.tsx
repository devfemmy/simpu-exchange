import { Text } from '@ui-kitten/components';
import React, { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { hp } from 'src/utils';

type LabelListProps = ComponentProps<typeof Pressable> & {
  text: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  onPress?: Function;
  border?: boolean;
  storage?: boolean;
};

const Labellist = ({
  text,
  icon1,
  icon2,
  storage,
  border,
  ...rest
}: LabelListProps) => {
  const styles = StyleSheet.create({
    textContainer: {
      width: '60%',
    },
    withBorder: {
      borderTopWidth: border ? 1 : 0,
      borderTopColor: 'rgba(60, 60, 67, 0.1)',
      minHeight: 53,
      paddingHorizontal: 10,
    },
    iconWidth: {
      width: '15%',
      alignItems: 'center',
    },
    textStyle: {
      color: '#0A0748',
      fontWeight: '400',
      fontSize: hp(17),
    },
  });
  return (
    <Pressable {...rest} style={[globalStyles.rowBetween, styles.withBorder]}>
      {storage ? null : <View>{icon1}</View>}
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={styles.iconWidth}>{icon2}</View>
    </Pressable>
  );
};

export default Labellist;
