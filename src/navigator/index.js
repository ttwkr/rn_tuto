import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../main';
import Detail from '../detail';
import TakeCamera from '../device/camera';
import CurrLocation from '../device/location';
import SettingPage from '../setting_page';
import FunctionTest from '../detail/functest';

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
          <Stack.Screen
            name={'Camera'}
            component={TakeCamera}
            option={'This Camera'}
          />
          <Stack.Screen
            name={'Location'}
            component={CurrLocation}
            option={'this Location'}
          />
          <Stack.Screen
            name={'SettingPage'}
            component={SettingPage}
            option={'this option'}
          />
          <Stack.Screen
            name={'FunctionTest'}
            component={FunctionTest}
            option={'this function test'}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navi;
