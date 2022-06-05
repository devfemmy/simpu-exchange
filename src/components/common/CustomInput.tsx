import React, { memo, ComponentProps } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Input as BaseInput, Text } from '@ui-kitten/components';
import { globalStyles } from '../../styles/globalStyles';
import { hp } from '../../utils';

type InputProps = ComponentProps<typeof BaseInput> & {
  error?: string | undefined;
  isPassword?: boolean;
  searchInput?: boolean;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

export const Input = memo(
  ({ error, containerStyle, placeholder, style, ...rest }: InputProps) => {
    return (
      <View style={[{ marginBottom: hp(20) }, containerStyle]}>
        <BaseInput
          size="large"
          placeholder={placeholder}
          placeholderTextColor={'#BABABA'}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, style]}
          textStyle={styles.textStyle}
          {...rest}
        />
        {error !== undefined ? (
          <View style={globalStyles.rowEnd}>
            <Text category="s1" style={styles.error}>
              {error}
            </Text>
          </View>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
    borderBottomWidth: 1,
    marginTop: hp(5),
  },
  textStyle: {
    fontSize: hp(15),
  },
  error: {
    paddingTop: hp(-8),
    color: 'tomato',
  },
});
