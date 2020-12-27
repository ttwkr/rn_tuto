import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {requestGPSPermission} from '../permission';
import Geolocation from 'react-native-geolocation-service';

const CurrLocation = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    requestGPSPermission().then((result) => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          (pos) => {
            setLocation(pos.coords);
            console.log(pos);
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
          },
        );
      }
    });
  }, []);
  return (
    <View style={styles.tutoStyle}>
      {location ? (
        <>
          <Text>{location.longitude}</Text>
          <Text>{location.latitude}</Text>
        </>
      ) : (
        <>
          <Text>Loading...</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tutoStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextStyle: {
    height: 40,
    width: 100,
    padding: 4,
    borderWidth: 1,
  },
});

export default CurrLocation;
