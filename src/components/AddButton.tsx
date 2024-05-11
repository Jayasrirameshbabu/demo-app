import AntDesign from 'react-native-vector-icons/AntDesign';
import type {TouchableOpacityProps} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';

type AddButtonProps = TouchableOpacityProps & {iconName: string};

export function AddButton({iconName, ...props}: AddButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.8}>
      <AntDesign name={iconName} size={18} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blueDark,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
