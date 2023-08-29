import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { getCurrentLocation } from './src/services/LocationService';

const App = () => {
  const [userLocations, setUserLocations] = useState([]);

  useEffect(() => {
    // Fetch user locations and update state
    getCurrentLocation()
      .then(coords => setUserLocations([...userLocations, coords]))
      .catch(error => console.error('Error fetching location:', error));
  }, []);

  return <AppNavigator userLocations={userLocations} />;
};

export default App;
