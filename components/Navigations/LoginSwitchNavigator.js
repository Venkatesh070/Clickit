import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import loginscreen from '../screens/loginscreen';



const Stack = createStackNavigator()

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      headerTitle:null
    }}>
       
      <Stack.Screen name="Login" component={loginscreen} />
    </Stack.Navigator>
  )
}

export default LoginStackNavigator