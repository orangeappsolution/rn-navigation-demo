import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BorderButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.signIn,
        {borderColor: '#009387', borderWidth: 1, marginTop: 15},
      ]}>
      <Text style={[styles.textSign, {color: '#009387'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BorderButton;

const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
