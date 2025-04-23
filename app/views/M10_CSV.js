import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Papa from 'papaparse';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
/**
 * Classe que hereta de Component i que implementa un component
 * que llegeix un csv de l'app
 * @version 1.0 4.05.2024
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  capçalera: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  columna: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  textColumna: {
    textAlign: 'center',
  },
  textCapçalera: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  missatgeError: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  }
});

// Dades CSV d'exemple en cas que no es pugui carregar el fitxer
const csvExemple = `nom,edat,ciutat
Pere,27,Barcelona
Maria,32,Girona
Joan,45,Tarragona
Montse,29,Lleida
`;

export class M10_CSV extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      carregant: true
    };
  }

  async componentDidMount() {
    try {
      try {
        // Load the CSV file as an asset
        const asset = Asset.fromModule(require('../../assets/dades.csv'));
        await asset.downloadAsync();
        
        // Read the file content
        const fileContent = await FileSystem.readAsStringAsync(asset.localUri);
        
        // Process the CSV content
        this.processarCSV(fileContent);
        
      } catch (error) {
        console.log('Error al carregar el fitxer CSV:', error);
        
        // If we can't load the file, use the example data
        this.processarCSV(csvExemple);
      }
    } catch (error) {
      console.error('Error general:', error);
      this.setState({ error: 'Error al processar les dades', carregant: false });
    }
  }
  
  processarCSV(contingutCSV) {
    Papa.parse(contingutCSV, {
      header: true, // Per interpretar la primera fila com a capçaleres
      complete: (results) => {
        console.log('Dades processades:', results.data);
        this.setState({ 
          data: results.data, 
          carregant: false,
          error: results.errors.length > 0 ? 'Hi ha errors en el format CSV' : null
        });
      },
      error: (error) => {
        console.error('Error al analitzar CSV:', error);
        this.setState({ error: 'Error al analitzar CSV', carregant: false });
      }
    });
  }

  render() {
    const { data, error, carregant } = this.state;
    
    // Obtenir les capçaleres des de la primera fila de dades
    const capçaleres = data.length > 0 ? Object.keys(data[0]) : [];
    
    return (
      <ScrollView style={estils.contenidor}>
        {carregant && <Text>Carregant dades...</Text>}
        
        {error && <Text style={estils.missatgeError}>{error}</Text>}
        
        {!carregant && !error && (
          <>
            {/* Capçalera de la taula */}
            <View style={[estils.fila, estils.capçalera]}>
              {capçaleres.map((capçalera, index) => (
                <View key={index} style={estils.columna}>
                  <Text style={estils.textCapçalera}>{capçalera}</Text>
                </View>
              ))}
            </View>
            
            {/* Files de dades */}
            {data.map((fila, indexFila) => (
              <View key={indexFila} style={estils.fila}>
                {capçaleres.map((capçalera, indexColumna) => (
                  <View key={indexColumna} style={estils.columna}>
                    <Text style={estils.textColumna}>{fila[capçalera]}</Text>
                  </View>
                ))}
              </View>
            ))}
          </>
        )}
      </ScrollView>
    );
  }
}