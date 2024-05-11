import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/images/icon.png')}
      />
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  text: {
    fontSize: 20,
    color: colors.purple,
  },
  image: {
    height: 50,
    width: 50,
  },
});
