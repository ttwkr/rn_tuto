import 'react-native-gesture-handler';
import BackgroundTimer from 'react-native-background-timer';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../main';
import Detail from '../detail';

const Stack = createStackNavigator();

const Navi = () => {
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

export default Navi;
