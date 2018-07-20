import React from 'react'
import { createStackNavigator } from 'react-navigation'

import MovieDetailScreen from '../screens/MovieDetailScreen'
import HomeScreen from '../screens/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    routeHome: HomeScreen,
    routeMovieDetail: MovieDetailScreen,
  },
);

export default AppNavigator