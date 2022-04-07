import React from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert } from 'react-native';

/**
 * Classe que hereta de Component i que treballa amb el
 * component que suma dos nombres
 * @version 1.0 23.03.2022
 * @author sergi.grau@fje.edu
 */



export class M10_Suma extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre1: '0',
      nombre2: '0',
      path: null,
    };

  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
          value={this.state.nombre1}
          placeholder="entra un nombre"
          keyboardType="numeric"
          onChangeText={(nombre1) => {
            this.setState({ nombre1 });
            this.forceUpdate()
            this.resultat = parseInt(this.state.nombre1) + parseInt(this.state.nombre2);
            console.log(this.state.nombre1);
            console.log(this.resultat);

          }


          }

        />
        <TextInput
          style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
          value={this.state.nombre2}
          placeholder="entra un nombre"
          keyboardType="numeric"
          onChangeText={(nombre2) => {
            this.setState({ nombre2 });
            

            this.resultat = parseInt(this.state.nombre1) + parseInt(this.state.nombre2);
            console.log(this.resultat);
          }
          }
        />
        <Button
          title="Suma"
          onPress={() => {
            Alert.alert(
              "Resultat",
              this.resultat.toString(),
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel "),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK ") }
              ]
            );
          }
          }
        />

        <Text>el Resultat de  {this.state.nombre1} + {this.state.nombre2} és {this.resultat}</Text>
      </SafeAreaView>
    );

  }
}