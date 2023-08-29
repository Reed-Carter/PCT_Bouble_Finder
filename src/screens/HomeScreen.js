import React from 'react';
import { View, Text } from 'react-native';
import Map from '../components/Map';

const HomeScreen = ({ userLocations }) => (
  <View style={{ flex: 1 }}>
    <Text>Welcome to the PCT Bouble Finder App!</Text>
    <Map userLocations={userLocations} />
  </View>
);

export default HomeScreen;
