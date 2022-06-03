import  React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Login from '../screens/loginscreen';
import Home from '../screens/Home';
import HelpScreen from '../screens/help';
import { createAppContainer} from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  Login:{ screen: Login},
  Home: {screen:Home},
});

// // const AppStackNavigator = createStackNavigator({
// //   Login:{screen:Login},
// //   Help:{screen:HelpScreen}
// // })
// const AppDrawerNavigator = createDrawerNavigator({
//   Dashboard:{
//     screen:DashboardScreen
//   }
// })


