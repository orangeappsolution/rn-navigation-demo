import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to detail screen"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
