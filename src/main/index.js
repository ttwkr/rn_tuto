import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';

const Main = ({navigation}) => {
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
