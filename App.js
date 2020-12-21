import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Navi from './src/navigator';

const Stack = createStackNavigator();

const App = () => {
  return <Navi />;
};

export default App;
