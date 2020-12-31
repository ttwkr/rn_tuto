import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Sqlite from 'react-native-sqlite-storage';

Sqlite.DEBUG(true);
// Sqlite.enablePromise(false);

let db = Sqlite.openDatabase({name: 'rolebot.db'});

const FunctionTest = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    db.transaction((transaction) => {
      transaction.executeSql(
        'select * from rolebot where id = 1',
        [],
        (tx, res) => {
          console.log(res.rows);
          setName(res.rows.item(0));
        },
      );
    });
  }, []);
  return (
    <View>
      <View style={styles.viewBottomLine}>
        <Text style={styles.textStyle}>인풋 테스트</Text>
        <Input placeholder={'이름'} onChangeText={(value) => setName(value)} />
        <Text>이름 : {name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  viewBottomLine: {
    borderBottomWidth: 2,
  },
});

export default FunctionTest;
