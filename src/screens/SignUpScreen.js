import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../components/context';
import FillButton from '../components/FillButton';
import BorderButton from '../components/BorderButton';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    checkTextInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const emailInputChange = val => {
    console.log(val);
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
      });
    }
  };

  const emailInputHandle = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const passwordInputChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const passwordInputHandle = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };

  const confirmPasswordInputChange = val => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.contaner}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Register Now</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <EmailTextInput
          title="Username"
          value={data.email}
          textInputChange={data.checkTextInputChange}
          onChangeText={val => emailInputChange(val)}
          onEndEditing={event => emailInputHandle(event.nativeEvent.text)}
        />

        <PasswordTextInput
          title="Password"
          value={data.password}
          secureTextEntry={data.secureTextEntry}
          textInputChange={data.checkTextInputChange}
          onChangeText={val => passwordInputChange(val)}
          onEndEditing={event => passwordInputHandle(event.nativeEvent.text)}
          updateSecureTextEntry={updateSecureTextEntry}
        />

        <PasswordTextInput
          title="Confirm Password"
          value={data.confirmPassword}
          secureTextEntry={data.secureTextEntry}
          textInputChange={data.checkTextInputChange}
          onChangeText={val => confirmPasswordInputChange(val)}
          onEndEditing={event => passwordInputHandle(event.nativeEvent.text)}
          updateSecureTextEntry={updateSecureTextEntry}
        />

        <View style={styles.button}>
          <FillButton
            title="Sign Up"
            onPress={() => {
              console.log('Signup');
            }}
          />

          <BorderButton
            title="Sign In"
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
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
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
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
