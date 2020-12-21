import React from 'react';
import {View, Button, Linking} from 'react-native';
import {MainButton} from '../button/main';

const SettingPage = ({navigation}) => {
  return (
    <View>
      <Button
        title={'setting'}
        onPress={() => Linking.openURL('app-settings:')}
      />
      <Button title={'Back'} onPress={() => navigation.goBack()} />
      <MainButton navigation={navigation} />
    </View>
  );
};

export default SettingPage;
