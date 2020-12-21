import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';
import {DetailButton} from '../button/main';

const Main = ({navigation}) => {
  return (
    <View style={styles.mainStyle}>
      <Text>Hello World</Text>
      <DetailButton navigation={navigation} />
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
