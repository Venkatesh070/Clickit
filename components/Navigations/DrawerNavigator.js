import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStackNavigator from './HomeStackNavigator'
import MyRewardsStackNavigator from './MyRewardsStackNavigator'
import LocationsStackNavigator from './LocationsStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="MyRewards" component={MyRewardsStackNavigator} />
      <Drawer.Screen name="Locations" component={LocationsStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator