import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import SideMenu from './SideMenu/SideMenu'
import stackNav from './StackNav';

const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

const App = createAppContainer(drawernav);

AppRegistry.registerComponent('CollegeSobeRides', () => App);
