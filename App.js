import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text} from 'react-native'

import MainScreen from './screens/MainScreen'

export default class App extends React.Component {
  render() {

    const MainNavigator = createStackNavigator({
      Main: {screen: MainScreen}
    })

    return (
        <MainNavigator/>
    );
  }
}