import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FillButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.signIn} onPress={onPress}>
      <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
        <Text style={[styles.textSign, {color: '#fff'}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FillButton;

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
