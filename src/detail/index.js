import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {
  MainButton,
  GoBack,
  SettingsButton,
  CameraButton,
  LocationButton,
  FunctionTestButton,
} from '../button/main';

const Detail = ({navigation}) => {
  return (
    <View style={styles.tutoStyle}>
      <Text>This is Detail Page</Text>
      <FunctionTestButton navigation={navigation} />
      <CameraButton navigation={navigation} />
      <LocationButton navigation={navigation} />
      <SettingsButton navigation={navigation} />
      <Button
        title={'Go to Detail again'}
        onPress={() => navigation.push('Detail')}
      />
      <MainButton navigation={navigation} />
      <GoBack navigation={navigation} />
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

export default Detail;
