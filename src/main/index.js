import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const Main = ({navigation}) => {
  console.log('Start BackGround Timer');
  let i = 0;
  const intervalId = BackgroundTimer.setInterval(() => {
    i++;
    console.log('time : ' + i);
  }, 1000);
  if (i === 10) {
    BackgroundTimer.clearInterval(intervalId);
  }
  return (
    <View style={styles.mainStyle}>
      <Text>Hello World</Text>
      <Button
        title={'Go to Detail'}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
