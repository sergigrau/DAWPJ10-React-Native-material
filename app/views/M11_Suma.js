import React from 'react';
import {  SafeAreaView, TextInput, Text, Button, Alert, StyleSheet, View } from 'react-native';
import { BotoPersonalitzat } from '../widget/BotoPesonalitzat';

/**
 * Classe que hereta de Component i que treballa amb el
 * component que suma dos nombres
 * @version 1.1 12.04.2025
 * @author sergi.grau@fje.edu
 */
const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0',
  },
  contenidorBotons: {
    width: '80%',
    alignSelf: 'center',
  }
});

export class M11_Suma extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      nombre1: '0',
      nombre2: '0',
      resultat: 0
    };
  }

  calcularSuma = (n1, n2) => {
    // Convertimos a número y manejamos valores no numéricos
    const num1 = isNaN(parseInt(n1)) ? 0 : parseInt(n1);
    const num2 = isNaN(parseInt(n2)) ? 0 : parseInt(n2);
    
    return num1 + num2;
  }

  actualitzarNombre1 = (nombre1) => {
    this.setState({ 
      nombre1,
      resultat: this.calcularSuma(nombre1, this.state.nombre2)
    });
  }

  actualitzarNombre2 = (nombre2) => {
    this.setState({ 
      nombre2,
      resultat: this.calcularSuma(this.state.nombre1, nombre2)
    });
  }

  mostrarResultat = () => {
    Alert.alert(
      "Resultat",
      `La suma de ${this.state.nombre1} + ${this.state.nombre2} és ${this.state.resultat}`,
      [
        {
          text: "Cancel·lar",
          style: "cancel"
        },
        { text: "D'acord" }
      ]
    );
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
          value={this.state.nombre1}
          placeholder="entra un nombre"
          keyboardType="numeric"
          onChangeText={this.actualitzarNombre1}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
          value={this.state.nombre2}
          placeholder="entra un nombre"
          keyboardType="numeric"
          onChangeText={this.actualitzarNombre2}
        />
          <View style={estils.contenidorBotons}>
              
        <BotoPersonalitzat
          title="Suma"
          onPress={this.mostrarResultat}
        />
        </View>
        <Text>el Resultat de  {this.state.nombre1} + {this.state.nombre2} és {this.state.resultat}</Text>
      </SafeAreaView>
    );
  }
}