import React from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


export class M07_Camera extends React.Component {
  cameraRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
    const { status: mediaLibStatus } = await MediaLibrary.requestPermissionsAsync();
  this.setState({ hasMediaLibPermission: mediaLibStatus === 'granted' });
  }

  takePicture = async () => {
    if (this.cameraRef.current) {
      let photo = await this.cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      await MediaLibrary.createAlbumAsync('DAW2', asset, false);
    }
  };

  render() {
    const { hasPermission } = this.state;

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref={this.cameraRef} />
        <Button title="Fes una foto" onPress={this.takePicture} />
      </View>
    );
  }
}

