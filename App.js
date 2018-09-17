import React, { Component } from 'react';

import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

export default class App extends Component {
  render() {
    return (
      <DrawerNav />
    );
  }
}

const DrawerNav = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Setting: {
    screen: SettingScreen,
  }
})