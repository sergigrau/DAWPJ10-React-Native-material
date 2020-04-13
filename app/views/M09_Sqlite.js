import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

/**
 * Classe que hereta de Component i que treballa amb el
 * component de SQLite. Les dades es mostren per consola per a facilitar l'exercici
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  textPeu: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  peu: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FA0'
  },
});
export class M09_Sqlite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
    };
    db = SQLite.openDatabase("db.db");

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
    console.log('creada taula');
    db.transaction(
      tx => {
        tx.executeSql("insert into items (done, value) values (0, ?)", ['primer']);
        tx.executeSql("insert into items (done, value) values (1, ?)", ['segon']);
        tx.executeSql("insert into items (done, value) values (2, ?)", ['tercer']);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      }
    );
  }

  render() {
    return (
      <View style={estils.peu}>
        <Text style={estils.textPeu}> SQLITE </Text>
      </View>
    );

  }
}