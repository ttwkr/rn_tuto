import React, {useState} from 'react';
import {View, Button, Linking, Switch, Text, StyleSheet} from 'react-native';
import {MainButton} from '../button/main';

const SettingPage = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Button
        title={'setting'}
        onPress={() => Linking.openURL('app-settings:')}
      />
      {/*블루투스 토글*/}
      <View>
        <Text>BlueTooth</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Button title={'Back'} onPress={() => navigation.goBack()} />
      <MainButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingPage;
