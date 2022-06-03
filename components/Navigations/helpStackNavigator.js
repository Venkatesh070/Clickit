import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Help from '../screens/Help';

const Stack = createStackNavigator()

const HelpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  )
}

export default HelpStackNavigator