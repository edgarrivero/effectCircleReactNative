 import React from 'react';
 import { View, StyleSheet, Text,Dimensions,Image, TouchableOpacity  } from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
 import { SettingsSvg } from '../assets/data/svgs';
import House from '../assets/icon/house.svg';
import { HomeSolid, HomeLine } from '../components/Iconos/HouseSvg';

 const TabItem = ({ screenName, iconActive, iconInactive, label, onPress, isActive }) => (
  <TouchableOpacity
    style={[styles.label, isActive && styles.activeTab]}
    onPress={() => onPress(screenName)}
  >
    <Image source={isActive ? iconActive : iconInactive} style={styles.image} />
    <Text style={[styles.btnlabel, isActive && styles.activeTabText]}>{label}</Text>
  </TouchableOpacity>
);

 const Tabs = (props) => {
   const windowHeight = Dimensions.get('window').height;
   const bottomViewHeight = 90; 
   const navigation = useNavigation();
   const route = useRoute();

   const handleImagePress = (screenName) => {
     navigation.navigate(screenName);

   };

   return (
      <View style={[styles.bottomView, { top: windowHeight - bottomViewHeight }]}>
         {/* Contenido del elemento View en la parte inferior */}
         
         <View style={styles.tabs}>
             
                {/* <TabItem
                  screenName="Sparkles"
                  iconActive={require('../assets/icons/home-solid.png')}
                  iconInactive={require('../assets/icons/home-line.png')}
                  label="Sparkles"
                  onPress={handleImagePress}
                  isActive={route.name === 'Sparkles'}
                />
                <TabItem
                  screenName="Books"
                  iconActive={require('../assets/icons/books-solid.png')}
                  iconInactive={require('../assets/icons/books-line.png')}
                  label="Books"
                  onPress={handleImagePress}
                  isActive={route.name === 'Books'}
                />
                <TabItem
                  screenName="Settings"
                  iconActive={{ uri: props.picture }}
                  iconInactive={{ uri: props.picture }}
                  label="Settings"
                  onPress={handleImagePress}
                  isActive={route.name === 'Settings'}
                />   */}

                <TouchableOpacity onPress={() => handleImagePress('Home')} style={styles.label} >
                  <HomeSolid fill="white" stroke='white' strokeWidth={0} width={28} height={28} />
                  <Text style={styles.btnlabel}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Home')} style={styles.label} >
                  <HomeLine fill="white" stroke='white' strokeWidth={0} width={28} height={28} />
                  <Text style={styles.btnlabel}>Particles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Home')} style={styles.label} >
                  <HomeSolid fill="white" stroke='white' strokeWidth={0} width={28} height={28} />
                  <Text style={styles.btnlabel}>Books</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Home')} style={styles.label} >
                  <Image source={{ uri: props.picture }} style={styles.profileImage} />
                  <Text style={styles.btnlabel}>Settings</Text>
                </TouchableOpacity> 
            </View>
        </View>
   );
 };
 const styles = StyleSheet.create({
   bottomView: {
     position: 'absolute',
     left: 30
   },
   label:{
    padding: 18,
    alignContent: 'center',
    alignItems: 'center'
   },
   tabs: {
    width: Dimensions.get('window').width - 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: 15,
    alignContent: '',
     justifyContent: 'center',
     alignItems: 'center',
     width: Dimensions.get('window').width - 70,
     height: 65,
     borderRadius: 30,
     margin: 5, 
     flexDirection: 'row',
     overflow: 'hidden',
   },
   tabs2: {
     alignContent: '',
     justifyContent: 'center',
     alignItems: 'center',
     width: Dimensions.get('window').width - 70,
     height: 50,
     borderRadius: 30,
     margin: 5, 
     flexDirection: 'row',
     overflow: 'hidden',
     backgroundColor: 'rgba(255, 255, 255, 0.1)',
   },
   image: {
     width: 28,
     height: 28,
     justifyContent: 'center',
     alignItems: 'center',
     marginHorizontal: 17
   },
   vector: {
    width: '40'
   },
   btnlabel: {
    color: 'white',
    fontSize: 12
   },
   profileImage: {
    width: 32,
    height: 32,
    borderRadius: 25,
    backgroundColor: 'gray'
  },
 });
 export default Tabs;






