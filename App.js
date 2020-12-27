import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Navi from './src/navigator';
import {askPermission, requestGPSPermission} from './src/permission';

const App = () => {
  askPermission(PERMISSIONS.IOS.CAMERA);
  askPermission(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
  return <Navi />;
};

export default App;
