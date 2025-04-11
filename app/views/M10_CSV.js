import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Papa from 'papaparse';
import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

/**
 * Classe que hereta de Component i que implementa un component
 * que llegeix un csv de l'app
 * @version 1.0 4.05.2024
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});


export class M10_CSV extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {

    //const { localUri: rutaLocal } = await Asset.fromModule(require('../../assets/dades.csv')).downloadAsync();
    const fitxerCSV = await readAsStringAsync(rutaLocal);

    Papa.parse(fitxerCSV, {
      complete: (results) => {
        this.setState({ data: results.data });
        console.log(results.data);
      }
    });
  }

  render() {
    return (
      <View>
        {this.state.data.map((fila, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            {fila.map((item, index) => (
              <Text key={index} style={{ margin: 10 }}>{item}</Text>
            ))}
          </View>
        ))}
      </View>
    );
  }
}