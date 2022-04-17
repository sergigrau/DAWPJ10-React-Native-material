import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * expo install expo-camera
 * expo install expo-permissions
 * @version 2.0 17.04.2022
 * @author sergi.grau@fje.edu
 */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  capture: {
    width: 200,
    height: 40,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,

  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});

export class M07_Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      path: null,
    };
  }

  ferFoto = async () => {
    try {
      const data = await this.camera.current.takePictureAsync();
      this.setState({ path: data.uri });
      // this.props.updateImage(data.uri);
      // console.log('Path to image: ' + data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableHighlight
                style={styles.capture}
                onPress={this.ferFoto.bind(this)}
                underlayColor="rgba(255, 255, 255, 0.5)"
              >
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Fer foto </Text>
              </TouchableHighlight>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}