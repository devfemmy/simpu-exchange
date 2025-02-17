import React, { memo, ComponentProps } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import { Button as BaseButton } from '@ui-kitten/components';

import { hp } from '../../utils/responsiveDesign';
import { colors } from '../../constants';

type ButtonProps = ComponentProps<typeof BaseButton> & {
  title: string;
  isLoading?: boolean;
  loaderColor?: string;
  style?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({ title, isLoading = false, style, ...rest }: ButtonProps) => {
    return (
      <View style={styles.containerStyle}>
        <BaseButton disabled={isLoading} style={[styles.btn, style]} {...rest}>
          {title}
        </BaseButton>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: hp(10),
    height: hp(50),
    backgroundColor: colors.primaryBg,
    borderColor: 'transparent',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerStyle: {
    width: '100%',
  },
});
