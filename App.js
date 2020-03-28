import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from './app/views/Home_routing';
import {Detalls} from './app/views/Detalls_routing';

/**
 * Modificacions al component principal d'entrada de React
 * per incloure encaminaments, però no components
 * @version 1.0 28.03.2020
 * @author sergi.grau@fje.edu
 */

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detall" component={Detalls} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;