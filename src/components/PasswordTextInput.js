import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

const PasswordTextInput = ({
  title,
  value,
  secureTextEntry,
  onChangeText,
  onEndEditing,
  updateSecureTextEntry,
}) => {
  const {colors} = useTheme();
  return (
    <View>
      <Text style={[styles.textFooter, {marginTop: 35, color: colors.text}]}>
        {title}
      </Text>
      <View style={styles.action}>
        <Feather name="lock" color={colors.text} size={20} />
        <TextInput
          style={[styles.textInput, {color: colors.text}]}
          placeholder="Your Password"
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          onEndEditing={onEndEditing}
        />
        <Feather
          name={secureTextEntry ? 'eye-off' : 'eye'}
          color="green"
          size={20}
          onPress={updateSecureTextEntry}
        />
      </View>
    </View>
  );
};

export default PasswordTextInput;

const styles = StyleSheet.create({
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
