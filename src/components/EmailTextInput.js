import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const EmailTextInput = ({
  title,
  value,
  textInputChange,
  onChangeText,
  onEndEditing,
}) => {
  const {colors} = useTheme();

  return (
    <View>
      <Text style={[styles.textFooter, {color: colors.text}]}>{title}</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <TextInput
          style={[styles.textInput, {color: colors.text}]}
          placeholder="Your Email"
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          onEndEditing={onEndEditing}
        />
        {textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
    </View>
  );
};

export default EmailTextInput;

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
