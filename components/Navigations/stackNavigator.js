import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginStackNavigator from './LoginSwitchNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import DrawerNavigator from './DrawerNavigator'
import HelpStackNavigator from './helpStackNavigator'

import BottomTabNavigator from './BottomTabNavigator';
import { Title } from 'react-native-paper'


const stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <stack.Navigator 
    initialRouteName='Login'
    screenOptions={{
        headerShown: false,

      }}
      options={{animationEnabled:false }}>
      <stack.Screen name="Login" component={LoginStackNavigator} screenOptions={{
      headerShown: false,
    }}/>
     <stack.Screen name="FAQ" component={HelpStackNavigator} options={{animationEnabled:false,headerTitle:"FAQ",headerShown:true }}
     screenOptions={{
        headerShown: true,
         }}/>
      <stack.Screen name='Home' component={DrawerNavigator} 
      options={{animationEnabled:false }}
      screenOptions={{
      headerShown: false,
       }}/>
    </stack.Navigator>
  )
}

export default StackNavigator