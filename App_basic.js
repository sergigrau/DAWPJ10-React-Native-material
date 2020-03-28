import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Home} from './app/views/Home';

/**
 * Modificacions al component principal d'entrada de React
 * sense incloure encaminaments
 * @version 1.0 28.03.2020
 * @author sergi.grau@fje.edu
 */


export default function App() {
  return (
    <View style={styles.container}>
      <Text>DAW2</Text>
      <Home></Home>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

