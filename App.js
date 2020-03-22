import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from './app/views/Home';

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
