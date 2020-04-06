import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {M06_Home} from './app/views/M06_Home_routing';
import {M06_Detalls} from './app/views/M06_Detalls_routing';
import {M07_Camera} from './app/views/M07_Camera';

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
        <Stack.Screen name="Home" component={M06_Home} />
        <Stack.Screen name="Detall" component={M06_Detalls} />
        <Stack.Screen name="Camera" component={M07_Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;