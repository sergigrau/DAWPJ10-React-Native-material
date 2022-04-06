import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import MapView from 'react-native-maps';
/**
 * Classe que hereta de Component i que implementa un component
 * per a visualitzar mapes, Fa servir routing
 * @version 1.0 05.04.2020
 * @author sergi.grau@fje.edu
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
const mode = 'driving'; // 'walking';


export class M08_Mapes extends React.Component {
  coords = [{
    lat: 41.390205,
    lng: 2.174007,
  }, {
    lat: 41.380205,
    lng: 2.175007,
  }]
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Mapa </Text>
        <MapView style={styles.mapStyle} initialRegion={{
          latitude: this.coords[0].lat,
          longitude: this.coords[0].lng,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
          
          <MapView.Marker
            coordinate={{
              latitude: this.coords[0].lat,
              longitude: this.coords[0].lng
            }}
            title={"sortida"}
            description={"punt A"}
          />
          <MapView.Marker
            coordinate={{
              latitude: this.coords[1].lat,
              longitude: this.coords[1].lng
            }}
            title={"arribada"}
            description={"punt B"}
          />
           <MapView.Marker
            coordinate={{
              latitude: this.coords[1].lat,
              longitude: this.coords[1].lng
            }}
            title={"arribada"}
            description={"punt B"}
          />
        <MapView.Polyline
		coordinates={[
			{  latitude: 41.390205, longitude: 2.174007, },
			{ latitude: 41.380205, longitude: 2.175007 },
	
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>
       
        </MapView>

      </View>
    );
  }
}
/*
 <MapView.MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={AIzaSyAIks4547oo8Dl8_flmn8yICsbKq1Oq3x8} 
          strokeWidth={4}
          strokeColor="#111111"
        />
        */