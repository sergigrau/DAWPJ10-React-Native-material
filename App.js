import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {M06_Home} from './app/views/M06_Home';
import {M06_Detalls} from './app/views/M06_Detalls';
import {M07_Camera} from './app/views/M07_Camera';
import {M08_Mapes} from './app/views/M08_Mapes';
import {M09_Sqlite} from './app/views/M09_Sqlite';
import { M10_CSV } from './app/views/M10_CSV';
/**
 * Modificacions al component principal d'entrada de React
 * per incloure encaminaments, però no components
 * @version 2.0 02.05.2024
 * @author sergi.grau@fje.edu
 */

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={M06_Home} />
        <Stack.Screen name="Detall" component={M06_Detalls} />
        <Stack.Screen name="Camera" component={M07_Camera} />
        <Stack.Screen name="Mapes" component={M08_Mapes} />
        <Stack.Screen name="SQLite" component={M09_Sqlite} />
        <Stack.Screen name="CSV" component={M10_CSV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;