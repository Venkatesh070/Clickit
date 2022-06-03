import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LocationsScreen from '../screens/Location'
import Home from '../screens/Home';
import loginscreen from '../screens/loginscreen';

const Stack = createStackNavigator()

const Locations = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location screen!</Text>
    </View>
  )

const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Location" component={LocationsScreen} />
    </Stack.Navigator>
  )
}

export default LocationsStackNavigator