import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailScreen from '../DetailScreen';

const DetailStack = createStackNavigator();

const DetailStackNavigation = ({navigation}) => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWight: 'bold',
        },
      }}>
      <DetailStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={30}
              backgroundColor="#1f65ff"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </DetailStack.Navigator>
  );
};

export default DetailStackNavigation;
