// import React from 'react';
// import {View} from 'react-native'
// import Down from './components/Navigations/BottomNav';
// import 'react-native-gesture-handler';
// import AppNavigation from './components/Navigations/Stack';



// export default  App =() => {
//   return(
//    <AppNavigation/>
//   )
// }


import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '../Clickit/components/Navigations/stackNavigator'
import AppSwitchNavigator from './components/Navigations/LoginSwitchNavigator'

import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native'
import Help from './components/screens/Help'

const App = () => {
  return (
    // <Help/>
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
   
  )
}


export default App
