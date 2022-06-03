import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  Alert,
  TextInput,SafeAreaView
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import Home from './Home';
import HelpScreen from './Help';
import { setWarningHandler } from 'react-native/Libraries/Utilities/RCTLog';

export default Login = ({navigation}) => {


  // For Back Handler

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Alert', 'Are you sure you want to go back', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, []);

  // For PhoneInput

  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = () => {
    phoneInput;
  };

  // Login Button
  const buttonhandler = ()=>{
    if (value==9515536157){
      navigation.navigate('Home')
    }else{
     alert("Login Failed")
    }
  }

  // Get help
const helpeddata = ()=>{
  navigation.navigate('FAQ')
  // alert("working")
}

  // For EmailInput
const [emailValue,setemailValue] = useState("")

  // For segment control tab

  const [segment, setSegment] = useState({
    selectedIndex: 0,
    selectedIndices: [0],
    customStyleIndex: 0,
  });
  handleSingleIndexSelect = index => {
    setSegment(segment => ({...segment, selectedIndex: index}));
  };

  handleMultipleIndexSelect = index => {
    const {selectedIndices} = segment;

    if (selectedIndices.includes(index)) {
      setSegment(segment => ({
        ...segment,
        selectedIndices: selectedIndices.filter(i => i !== index),
      }));
    } else {
      setSegment(segment => ({
        ...segment,
        selectedIndices: [...selectedIndices, index],
      }));
    }
  };

  handleCustomIndexSelect = index => {
    setSegment(prevState => ({...segment, customStyleIndex: index}));
  };

  const {selectedIndex, selectedIndices, customStyleIndex} = segment;
  return (
    <SafeAreaView  style={styles.container}>
    <ScrollView style={styles.scrollContainer}
    keyboardShouldPersistTaps="handled">
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('./../../Assets/Images/logo.png')}
        />
      </View>
      <Text style={styles.loginstyle}>Login</Text>
      <Text>Enter your details to login!</Text>
      <View style={styles.body}>
        <SegmentedControlTab
          values={['Phone number', 'Email address']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          tabsContainerStyle={{
            height: 50,
            width: '93%',
            marginTop: 25,
            marginRight: 30,
          }}
          activeTabStyle={{
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          tabTextStyle={{color: '#A09D9C', fontWeight: '700'}}
          tabStyle={{backgroundColor: '#e7f5fe', borderColor: '#e7f5fe'}}
        />
      </View>
      {customStyleIndex === 0 && (
        <View style={styles.phonenumbertab}>
          <Text style={{color: '#A09D9C'}}> Registered phone number</Text>
          <View style={styles.phoneInput}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="IN"
              layout="first"
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
                setCountryCode(phoneInput.current?.getCountryCode() || '');
              }}
              countryPickerProps={{withAlphaFilter: true}}
              disabled={disabled}
              withDarkTheme
              autoFocus
            />
          </View>
          <TouchableOpacity
            onPress={buttonhandler}
            style={styles.button}>
            <Text style={{fontWeight: '500', color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#A09D9C'}}>Dont' have an account?</Text>
            <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}> Sign up</Text>
            </TouchableOpacity>
         
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop: 20, fontWeight: '500'}}>OR</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <View style={styles.iconContainerStyle}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                  source={require('../../Assets/Images/googlelogo.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainerStyle}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                  source={require('../../Assets/Images/linkedinlogo.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainerStyle}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                  source={require('../../Assets/Images/fbLogo.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainerStyle}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                  source={require('../../Assets/Images/appleLogo.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
              <TouchableOpacity   style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              height:30,
              width:'30%',
              alignSelf:"center",
            }}
            onPress={() => helpeddata()}>
            <Icon name="question-circle-o" size={20} />
            <Text style={{fontWeight: '500', marginLeft: 5}}>Get help</Text>
            </TouchableOpacity>
        </View>
      )}
      {customStyleIndex === 1 && (
         <View style={styles.phonenumbertab}>
         <Text style={{color: '#A09D9C'}}> Registered email</Text>
         <View style={styles.emailInput}>
         <TextInput
                style={styles.emailInput}
                placeholder="Enter email"
                keyboardType="email-address"
                value={emailValue}
                onChangeText={(text) => setemailValue(text)}
                onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
           
         </View>
         <TouchableOpacity
           onPress={() => alert('button pressed')}
           style={styles.button}>
           <Text style={{fontWeight: '500', color: 'white'}}>Login</Text>
         </TouchableOpacity>
         <View
           style={{
             marginTop: 20,
             flexDirection: 'row',
             justifyContent: 'center',
             alignItems: 'center',
           }}>
           <Text style={{color: '#A09D9C'}}>Dont' have an account?</Text>
           <TouchableOpacity>
           <Text style={{fontWeight: 'bold'}}> Sign up</Text>
           </TouchableOpacity>
        
         </View>
         <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Text style={{marginTop: 20, fontWeight: '500'}}>OR</Text>
         </View>
         <View
           style={{
             marginTop: 20,
             flexDirection: 'row',
             justifyContent: 'space-around',
             alignItems: 'center',
             marginRight: 10,
           }}>
           <View style={styles.iconContainerStyle}>
             <TouchableOpacity>
               <Image
                 style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                 source={require('../../Assets/Images/googlelogo.png')}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.iconContainerStyle}>
             <TouchableOpacity>
               <Image
                 style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                 source={require('../../Assets/Images/linkedinlogo.png')}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.iconContainerStyle}>
             <TouchableOpacity>
               <Image
                 style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                 source={require('../../Assets/Images/fbLogo.png')}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.iconContainerStyle}>
             <TouchableOpacity>
               <Image
                 style={{width: 30, height: 30, marginTop: 25, marginLeft: 25}}
                 source={require('../../Assets/Images/appleLogo.png')}
               />
             </TouchableOpacity>
           </View>
         </View>
         <TouchableOpacity   style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              height:30,
              width:'30%',
              alignSelf:"center",
            }}
            onPress={helpeddata}>
            <Icon name="question-circle-o" size={20} />
            <Text style={{fontWeight: '500', marginLeft: 5}}>Get help</Text>
            </TouchableOpacity>
       </View>
      )}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  scrollContainer: {
    backgroundColor:"white",
    marginLeft: 20,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor:"white"
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: '100%',
  },
  loginstyle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 15,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phonenumbertab: {
    marginTop: 30,
  },
  phoneInput: {
    backgroundColor: '#e7f5fe',
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#e7f5fe',
    marginRight: 25,
    marginBottom: 10,
    fontSize: 14,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  emailInput:{
    backgroundColor: '#e7f5fe',
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#e7f5fe',
    marginRight: 25,
    marginBottom: 10,
    fontSize: 14,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft:10
  },
  button: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 20,
    marginTop: 25,
    backgroundColor: 'rgb(60, 110, 290)	',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerStyle: {
    height: 80,
    width: 80,
    backgroundColor: '#e7f5fe',
    borderRadius: 15,
  },
});
