import React from 'react';
import {Button, View, Linking} from 'react-native';
import TakeCamera from '../device/camera';

export const MainButton = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Go to Main'}
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export const GoBack = ({navigation}) => {
  return (
    <View>
      <Button title={'Back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export const SettingsButton = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Settings'}
        onPress={() => navigation.navigate('SettingPage')}
      />
    </View>
  );
};

export const DetailButton = ({navigation}) => {
  return (
    <View>
      <Button title={'Detail'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export const CameraButton = ({navigation}) => {
  return (
    <View>
      <Button title={'Camera'} onPress={() => navigation.navigate('Camera')} />
    </View>
  );
};

export const LocationButton = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Location'}
        onPress={() => navigation.navigate('Location')}
      />
    </View>
  );
};

export const FunctionTestButton = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Function Test'}
        onPress={() => navigation.navigate('FunctionTest')}
      />
    </View>
  );
};
