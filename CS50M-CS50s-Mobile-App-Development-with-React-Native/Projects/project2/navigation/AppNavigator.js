import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ScreenComponentTwo from '../screens/ScreenComponentTwo'
import HomeScreen from '../screens/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    routeHome: HomeScreen,
    routeNameTwo: ScreenComponentTwo,
  },
);

export default AppNavigator