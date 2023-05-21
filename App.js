import React from 'react';
import MapView from 'react-native-maps';
import {Text} from 'react-native'
import { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Callout } from 'react-native-maps'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function App() {
  const [region, setRegion] = React.useState({
    latitude: 38.53901115948904,
    longitude: -121.7535670766643,
    latitudeDelta: 0.04,
    longitudeDelta: 0.02
  })
  return (
    <View style={{marginTop: 50, flex: 1}/*styles.container*/}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      GooglePlacesSearchQuery={{
        rankby: "distance"
      }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.04,
          longitudeDelta: 0.02

        })
      }}
      query={{
        key: 'AIzaSyDIqMBPKCr72C1csU08z1pKws8l9VdpvKM',
        language: 'en',
        components: "country:us",
        types: "establishment",
        radius: 3000,
        location: `${region.latitude}, ${region.longitude}`
      }}
      styles={{
        container: {flex:0, position: "absolute", width: "100%", zIndex: 1},
        listView: {backgroundColor: "black"}

      }}
    />
      <MapView style={styles.map} 
        initialRegion = {{
  
        latitude: 38.53901115948904,
        longitude: -121.7535670766643,
      
        latitudeDelta: 0.04,
        longitudeDelta: 0.02

        }}
        provider = "google"


      
      >
        <Marker 
          coordinate = {{latitude: region.latitude, longitude: region.longitude}
    
          
          }
        
         />

<Marker 
          coordinate = {{latitude: 38.54001115948904,longitude: -121.7565670766643}
          
          // THIS IS THE COORDINATE OF CURRENT LOCATION
          
          }
          pinColor='#BEEC9F'
        
         > 
          <Callout>
            <Text>
              Destination
            </Text>

          </Callout>
         
         </Marker>

      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
