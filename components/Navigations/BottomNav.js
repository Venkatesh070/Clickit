import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Screen1 from '../screens/BottomTabScreens/Screen1';
import Screen2 from '../screens/BottomTabScreens/Screen2';
import Screen3 from '../screens/BottomTabScreens/Screen3';
import { Text, View, StyleSheet,} from 'react-native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../screens/loginscreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Tab = createMaterialBottomTabNavigator();


export default function Down() {
 
  return (
     <NavigationContainer>
          <Tab.Navigator
          initialRouteName='Screen2'
          activeColor="blue"
          inactiveColor="black"
          barStyle={{ backgroundColor: '#e7f5fe', }}>

               <Tab.Screen
            name="Screen_1"
            component={Screen1}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                
              }}
          />
          <Tab.Screen
            name="Screen_2"
            component={Screen2}
            options={{
            tabBarLabel: 'Screen2',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="camera" color={color} size={26} />
              ),
            }}
            
          />
           <Tab.Screen
            name="Screen_3"
            component={Screen3}
            options={{
            tabBarLabel: 'Screen3',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
              tabBarActiveTintColor:"red"
            }}
            
          />
          </Tab.Navigator>
     </NavigationContainer>
    // <View style={styles.container}>
      //<Screen1 />
     

    //</View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    
  },
 
 
});
