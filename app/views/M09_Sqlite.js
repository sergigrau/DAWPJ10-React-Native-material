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

  componentDidMount() {
    SQLite.openDatabaseAsync('daw2').then(db => {
      db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS alumnes (id INTEGER PRIMARY KEY NOT NULL, nom TEXT NOT NULL, nota INTEGER);
          INSERT INTO alumnes (id, nom, nota) VALUES (1,'sergi', 8);
          INSERT INTO alumnes (id, nom, nota) VALUES (2,'joan', 6);
          `).then(() => {
        console.log('taula creada i dades afegides');
        db.getAllAsync('SELECT * FROM alumnes').then((rows ) => {;
        for (const row of rows) {
          console.log(row.id, row.nom, row.nota);
        }
      }).catch(e => { 
        console.log(e);
      }
      );
      });
    }).catch(e => { 
      console.log(e);
    }
    );;
  }

  constructor(props) {
    super(props);
    this.state = {
      path: null,
    };

    /*
    SQLite.openDatabaseAsync("db.db").then(db => {
      db.runSync("create table if not exists items (id integer primary key not null, done int, value text);");
      console.log('creada taula');
    }).then(db => {
      console.log('executant insercions')
      db.runSync("insert into items (done, value) values (0, ?)", ['primer']);
      db.runSync("insert into items (done, value) values (1, ?)", ['segon']);
      db.runSync("insert into items (done, value) values (2, ?)", ['tercer']);
    }).then(db => {
      console.log('executant consulta')
      db.runSync("select * from items", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    })
      .catch(e => {
        console.log(e);
      }
      );
      */
  }

  render() {
    return (
      <View style={estils.peu}>
        <Text style={estils.textPeu}> SQLITE </Text>
      </View>
    );

  }
}