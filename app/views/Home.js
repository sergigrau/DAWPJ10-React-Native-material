import React from 'react';
import { Text, View } from 'react-native';

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * @version 1.0 sergi.grau@fje.edu
 */
export class Home extends React.Component {
    render() {
        return (
            <View >
              <Text>Component bàsic</Text>
            </View>
          );

    }
}