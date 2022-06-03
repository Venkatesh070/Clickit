import React,{useEffect, useRef, useState,useCallback} from 'react';
import {View,Text,StyleSheet,Modal,Pressable,TouchableOpacity,PanResponder} from 'react-native';


export default Home = ({navigation})=>{
  const [modalVisible, setModalVisible] = useState(false);
  const timerId = useRef(false)

  useEffect(() => {
    resetInactivityTimeout();
    setTimeout(function(){
     setModalVisible(true)
    }, 5000);
   hide()
  }, []);
    const hide = ()=>{
      setTimeout(function(){
        // alert("working")
        setModalVisible(false)
      },10000);
    }

    const hideModal = ()=>{
      setModalVisible(false)
    }


    const panResponder = useRef(
  PanResponder.create({
    onStartShouldSetPanResponderCapture: () => {
      // alert("working")
      console.log("User clicked")
      resetInactivityTimeout();
    },
  }),
).current;


const resetInactivityTimeout = useCallback(() => {
  clearTimeout(timerId.current);
  timerId.current = setTimeout(() => {
    // action after user has been detected idle
    // ex: logout from the app
    setModalVisible(true)
    console.log("idle")
  }, 5000);
}, []);


const openModal = () =>{
  setModalVisible(true)
}
 
 

  return(
    <View style={styles.container}  {...panResponder.panHandlers}>

      <Text>Home screen</Text>
      <View style={styles.centeredView}>
        <Modal
        animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{flex:1,justifyContent:"flex-end"}}>
               <TouchableOpacity  onPress={hideModal} style={{height:"100%",width:"100%",justifyContent:"flex-end"}} >
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={{ color: "white", fontWeight: "bold",textAlign: "center",marginTop:5}}>Do you want to create a order?</Text>
                <Text style={styles.textStyle}>Click on the "+" button</Text>
            {/* <View style = {styles.modalDownView}></View> */} 
          </View>
          <View style={styles.modalDownView}>

          </View>
          </View>
          
          </TouchableOpacity>
          </View>
        </Modal>
        
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  centeredView: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    height:70,
    width:"70%",
   
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent:"center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalDownView:{
    height:0,
    width:0,
    marginBottom:80,
   borderLeftColor:"transparent",
   borderLeftWidth:10,
   borderRightColor:'transparent',
   borderRightWidth:10,
   borderBottomColor:'transparent',
   borderBottomWidth:10,
   borderTopColor:'black',
   borderTopWidth:10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop:5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})