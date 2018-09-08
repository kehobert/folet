import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text} from 'react-native'

import MainScreen from './screens/MainScreen'
import PopUpScreen from './screens/PopUpScreen'

export default class App extends React.Component {
  render() {

    const MainNavigator = createStackNavigator({
      PopUpScreen: {screen: PopUpScreen},
      Main: {screen: MainScreen}
    })

    return (
        <MainNavigator/>
    );
  }
}