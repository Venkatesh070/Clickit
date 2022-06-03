import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default MyRewardScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>My Reward screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})