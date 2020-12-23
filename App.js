import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Navi from './src/navigator';
import askPermission from './src/permission';

const App = () => {
  askPermission();
  return <Navi />;
};

export default App;
