
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/* Header of the Expandable List Item  */}
      <View style={{width:"100%",justifyContent:"center",alignItems:"center",padding:10,flexDirection:'row'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
            
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={{ backgroundColor: 'white',
        justifyContent:"center",
        alignItems:"center",
        padding: 20,
        height:60,
        width:"30%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10}}>
            
        <Icons name="ios-chevron-down" size={20}/>
      </TouchableOpacity>
      </View>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}
        >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
               <View style={{width:"95%",justifyContent:"center",alignItems:"center",}}>
               <View
                 style={{  backgroundColor: 'white',
                 padding: 20,
                 width:"100%",
                 borderRadius:10}}>
                 <Text style={styles.text}>{item.val}</Text>
               </View>
               </View>
        //   <View
        //     style={styles.content}>
        //     <Text style={styles.text}>
        //       {item.val}
        //     </Text>
        //     <View style={styles.separator} />
        //   </View>
        ))}
       
      </View>
    </View>
  );
};

const Help = ({navigation}) => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <Text style={styles.titleText}>Registration</Text>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
             <Text style={styles.titleText}>Login</Text>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
           <Text style={{alignSelf:"center",padding:20,fontSize:20,fontWeight:"500"}}>Contact us</Text>
           <View style={{flexDirection:"row",justifyContent:"space-around"}}>
               <TouchableOpacity style={{height:55,width:"40%",flexDirection:"row",backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:13}}>
                  <Icons name="mail-outline" size={25}/>
                   <Text style={{alignSelf:"center",fontSize:18,fontWeight:"500",padding:5}}>Write to us</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{height:55,width:"40%",flexDirection:"row",backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:13}}>
                  <Icons name="call-outline" size={25}/>
                   <Text style={{alignSelf:"center",fontSize:18,fontWeight:"500",padding:5}}>Call us</Text>
               </TouchableOpacity>
           </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Help

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F5FCFF',
  },
  titleText: {
      padding:10,
  
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'white',
    height:60,
    padding: 20,
    width:"70%",
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
    
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  
  {
    isExpanded: false,
    category_name: 'Q1.What is lorem ipsum?',
    subcategory: [
      { val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a gallery of typr and scrambled it to make a type specimen book.' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Q2.why do we use it?',
    subcategory: [
        { val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a gallery of typr and scrambled it to make a type specimen book.' },
      ],
  },
  {
    isExpanded: false,
    category_name: 'Q3.Why do we use it?',
    subcategory: [
        { val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a gallery of typr and scrambled it to make a type specimen book.' },
      ],
  },
  {
    isExpanded: false,
    category_name: 'Q4.why do we use it?',
    subcategory: [
        { val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a gallery of typr and scrambled it to make a type specimen book.' },
      ],
  },
  {
    isExpanded: false,
    category_name: 'Q5.Why do we use it?',
    subcategory: [
        { val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a gallery of typr and scrambled it to make a type specimen book.' },
      ],
  }
];
