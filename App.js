import 'react-native-gesture-handler';
import {BackgroundTimer} from 'react-native-background-timer';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/main';
import Detail from './src/detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Main'} component={Main} option={'This Main'} />
          <Stack.Screen
            name={'Detail'}
            component={Detail}
            option={'This Detail'}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
