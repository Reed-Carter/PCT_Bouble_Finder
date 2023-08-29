import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ userLocations }) => (
  <MapView style={{ flex: 1 }}>
    {userLocations.map((location, index) => (
      <Marker
        key={index}
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
      />
    ))}
  </MapView>
);

export default Map;
