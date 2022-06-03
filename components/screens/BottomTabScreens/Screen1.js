import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function Screen1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Screen1</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    margin:10,
    
    justifyContent:'center'
    //backgroundColor:'red',
  },
  
});
