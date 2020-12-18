import React from 'react';
import {TextInput, View, Text, Button, StyleSheet} from 'react-native';

const Detail = ({navigation}) => {
  return (
    <View style={styles.tutoStyle}>
      <Text>This is Detail Page</Text>
      <TextInput style={styles.inputTextStyle} />
      <Button
        title={'Go to Main'}
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title={'Go to Detail again'}
        onPress={() => navigation.push('Detail')}
      />
      <Button title={'Back'} onPress={() => navigation.goBack()} />
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
