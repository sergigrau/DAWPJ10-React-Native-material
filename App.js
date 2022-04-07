import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {M00_Home} from './app/views/M00_Home';

import {M06_Home} from './app/views/M06_Home_routing';
import {M06_Detalls} from './app/views/M06_Detalls_routing';
import {M07_Camera} from './app/views/M07_Camera';
import {M09_Sqlite} from './app/views/M09_Sqlite';
import { M08_Mapes } from './app/views/M08_Mapes';
import { M10_Suma } from './app/views/M10_Suma';
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
       <Stack.Screen name="Zero" component={M00_Home} />
        <Stack.Screen name="Home" component={M06_Home} />
        <Stack.Screen name="Detall" component={M06_Detalls} />
        <Stack.Screen name="Camera" component={M07_Camera} />
        <Stack.Screen name="Mapes" component={M08_Mapes} />
        <Stack.Screen name="SQLite" component={M09_Sqlite} />
        <Stack.Screen name="Suma" component={M10_Suma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;