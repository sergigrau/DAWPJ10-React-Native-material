import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

/**
 * App que implementa una Camera
 * @version 1.0 05.04.2020
 * @author sergi.grau@fje.edu
 */

export default function App() {
  const [tePermisos, permisosAssignats] = useState(null);
  //let ruta = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  async function ferFoto() {
    console.log('fer foto');
    if (camera.current) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  }
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      permisosAssignats(status === 'granted');
    })();
  }, []);

  if (tePermisos === null) {
    return <View />;
  }
  if (tePermisos === false) {
    return <Text>No accés a la càmera</Text>;
  }
  
  return (

    <View style={{ flex: 1 }}>
       <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      <Camera style={{ flex: 1 }} type={type} ref={camera}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => ferFoto()} >
              
                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> fer foto</Text>
                 </TouchableOpacity>   
               <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> canviar càmera </Text>
            </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}