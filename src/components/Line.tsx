import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

export const styles = StyleSheet.create({
  line: {
    backgroundColor: colors.gray[400],
    height: 2,
  },
});
