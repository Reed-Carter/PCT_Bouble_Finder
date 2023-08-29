import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  // Other screens can be added here
});

export default createAppContainer(AppNavigator);
