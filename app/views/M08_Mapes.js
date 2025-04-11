import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import MapView from 'react-native-maps';
/**
 * Classe que hereta de Component i que implementa un component
 * per a visualitzar mapes, Fa servir routing
 * @version 1.0 05.04.2020
 * @author sergi.grau@fje.edu
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export class M08_Mapes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Mapa </Text>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}