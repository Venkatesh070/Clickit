import React,{useState} from 'react';
import { FlatList, Text, View, StyleSheet,TouchableOpacity,Image,SafeAreaView,TextInput,Button,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MapView, { Callout, Circle, Marker,} from 'react-native-maps';

export default LocationScreen = ({navigation}) => {

  const [pin,setPin] = useState({
    latitude: 17.387140,
    longitude:78.491684
  })
  return(
    // Git red
   <View style={styles.container}>
     <MapView
       style={styles.map}
       userLocationCalloutEnabled={false}
       initialRegion={{
       latitude: 17.387140,
       longitude: 78.491684,
       latitudeDelta: 0.0522,
       longitudeDelta: 0.0521,
     }}
     
     >
       <Marker
       coordinate={pin}
        pinColor="red"
        draggable={true}
        onDragStart={(e)=>{
          console.log("drag start",e.nativeEvent.coordinates)
        }}
        onDragEnd={(e)=>{setPin({
          latitude:e.nativeEvent.coordinate.latitude,
          longitude:e.nativeEvent.coordinate.longitude
        })}}
        >
          <Callout>
            <Text>Iam here</Text>
          </Callout>
          </Marker>
          <Circle center={pin}
            radius={1000}/>
     </MapView>
   </View>
)};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'red'
  },
  map: {
  flex:1
  },
 });