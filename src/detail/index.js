import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {MainButton, GoBack} from '../button/main';

const Detail = ({navigation}) => {
  const list = [
    {
      title: 'FunctionTest',
      icon: 'functions',
      navigation: 'FunctionTest',
    },
    {
      title: 'Camera',
      icon: 'camera',
      navigation: 'Camera',
    },
    {
      title: 'Location',
      icon: 'location-on',
      navigation: 'Location',
    },
    {
      title: 'Setting',
      icon: 'settings',
      navigation: 'SettingPage',
    },
  ];

  return (
    <View>
      {list.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() => navigation.navigate(item.navigation)}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Button
        title={'Go to Detail again'}
        onPress={() => navigation.push('Detail')}
      />
      <MainButton navigation={navigation} />
      <GoBack navigation={navigation} />
    </View>
  );
};

export default Detail;
