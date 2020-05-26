import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../components/context';
import Users from '../models/Users';
import {useTheme} from '@react-navigation/native';
import FillButton from '../components/FillButton';
import BorderButton from '../components/BorderButton';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';

const SignInScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = useContext(AuthContext);

  const {colors} = useTheme();

  const emailInputChange = val => {
    console.log(val);
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
        isValidUser: false,
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return item.username === userName && item.password === password;
    });

    if (userName.length === 0 || password.length === 0) {
      Alert.alert('Wrong Input', 'Username or Password field cannot be empty', [
        {text: 'Ok'},
      ]);

      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid user', 'Username or Password is incorrect', [
        {text: 'Ok'},
      ]);

      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.contaner}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {backgroundColor: colors.background}]}>
        <EmailTextInput
          title="Username"
          value={data.email}
          textInputChange={data.checkTextInputChange}
          onChangeText={val => emailInputChange(val)}
          onEndEditing={event => emailInputHandle(event.nativeEvent.text)}
        />
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Username must be 4 characters long
            </Text>
          </Animatable.View>
        )}

        <PasswordTextInput
          title="Password"
          value={data.password}
          secureTextEntry={data.secureTextEntry}
          textInputChange={data.checkTextInputChange}
          onChangeText={val => passwordInputChange(val)}
          onEndEditing={event => passwordInputHandle(event.nativeEvent.text)}
          updateSecureTextEntry={updateSecureTextEntry}
        />

        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Password must be 4 characters long
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <FillButton
            title="Sign In"
            onPress={() => loginHandle(data.email, data.password)}
          />

          <BorderButton
            title="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
  errorMessage: {
    color: 'red',
    fontSize: 14,
    paddingTop: 5,
  },
});
