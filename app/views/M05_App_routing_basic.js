import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Modificacions al component principal d'entrada de React
 * per incloure encaminaments, però no components
 * @version 1.0 28.03.2020
 * @author sergi.grau@fje.edu
 */

function PantallaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Home</Text>
      <Button
        title="Anar a Detalls"
        onPress={() => navigation.navigate('Detall', {
          nom: 'DAW2',
        })}
      />
    </View>
  );
}

function PantallaDetall({route,  navigation }) {
  //recuperem el paràmetre que li passem
  const { nom } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Detall </Text>
      <Text>el curs és: {JSON.stringify(nom)}</Text>

      <Button title="Tornar a Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PantallaHome} />
        <Stack.Screen name="Detall" component={PantallaDetall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;