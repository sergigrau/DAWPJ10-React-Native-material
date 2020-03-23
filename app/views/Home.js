import React from 'react';
import { Text, View } from 'react-native';
import {Login} from '../widget/Login'
/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */
export class Home extends React.Component {
    render() {
        return (
            <View >
              <Login missatge='polsar per a Login'></Login>
              <Text>Aprenent React Native a DAW2</Text>
            </View>
          );

    }
}