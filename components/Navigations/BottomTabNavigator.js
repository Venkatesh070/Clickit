import * as React from 'react'
import HomeStackNavigator from './HomeStackNavigator'
import BookStackNavigator from './BookStackNavigator'
import ContactStackNavigator from './ContactStackNavigator'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View, StyleSheet,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationsStackNavigator from './LocationsStackNavigator';
import AddStackNavigator from './AddStackNavigator';



const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
          <Tab.Navigator
          initialRouteName='HomeStack'
          activeColor="blue"
          inactiveColor="black"
          barStyle={{ backgroundColor: '#e7f5fe', }}>

               <Tab.Screen
            name="HomeStack"
            component={HomeStackNavigator}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                
              }}
          />
             <Tab.Screen
            name="BookStack"
            component={BookStackNavigator}
            options={{
                tabBarLabel: 'Book',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="book" color={color} size={26} />
                ),
                
              }}
          />

<Tab.Screen
            name="AddStack"
            component={AddStackNavigator}
            options={{
                tabBarLabel:false,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="plus" color={color} size={30} />
                ),
                
              }}
          />
          
          <Tab.Screen
            name="Location"
            component={LocationsStackNavigator}
            options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="map" color={color} size={26} />
              ),
            }}
            
          />
           <Tab.Screen
            name="ContactStack"
            component={ContactStackNavigator}
            options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
              tabBarActiveTintColor:"red"
            }}
            
          />
          </Tab.Navigator>
    
    // <View style={styles.container}>
      //<Screen1 />
     

    //</View>
  );
}
export default BottomTabNavigator
