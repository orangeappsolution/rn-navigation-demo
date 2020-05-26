import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../tab/MainTabScreen';
import {DrawerContent} from './DrawerContent';
import SupportScreen from '../SupportScreen';
import SettingScreen from '../SettingScreen';
import BookmarkScreen from '../BookmarkScreen';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
