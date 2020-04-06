import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});

export class M06_Detalls extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Pantalla Detall {JSON.stringify(this.props.route.params.nom)}</Text>
          <Text>el curs és: </Text>
    
          <Button title="Tornar a Home" onPress={() => this.props.navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => this.props.navigation.navigate.goBack()} />
        </View>
      );
    }
}