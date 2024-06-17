 import React from 'react';
 import { View, StyleSheet, Text,Dimensions,Image, TouchableOpacity  } from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
 import { SettingsSvg } from '../assets/data/svgs';
import House from '../assets/icon/house.svg';
import { HomeLine, ChartLine, SettingLine, GameLine } from '../components/Iconos/HouseSvg';

const TabItem = ({ screenName, IconComponent, label, onPress, isActive }) => (
  <TouchableOpacity
    style={[styles.label, isActive && styles.activeTab]}
    onPress={() => onPress(screenName)}
  >
    <IconComponent stroke={isActive ? "#FEBC00" : "#858585"} />
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
            <TabItem
              screenName="Home"
              IconComponent={HomeLine}
              label="Inicio"
              onPress={handleImagePress}
              isActive={route.name === 'Home'}
            />
            <TabItem
              screenName="Books"
              IconComponent={GameLine}
              label="Juegos"
              onPress={handleImagePress}
              isActive={route.name === 'Books'}
            />
            <TabItem
              screenName="Sparkles"
              IconComponent={ChartLine}
              label="Avance"
              onPress={handleImagePress}
              isActive={route.name === 'Sparkles'}
            />
            <TabItem
              screenName="Settings"
              IconComponent={SettingLine}
              label="Ajustes"
              onPress={handleImagePress}
              isActive={route.name === 'Settings'}
            />
          </View>

                {/* <TouchableOpacity onPress={() => handleImagePress('Home')} style={styles.label} >
                  <HomeLine fill="#FEBC00" stroke='#FEBC00' strokeWidth={0} width={24} height={24} />
                  <Text style={styles.btnlabel}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Books')} style={styles.label} >
                  <GameLine fill="#858585" stroke='#858585' strokeWidth={0} width={24} height={24} />
                  <Text style={styles.btnlabel}>Juegos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Sparkles')} style={styles.label} >
                  <ChartLine fill="#858585" stroke='#858585' strokeWidth={1} width={24} height={24} />
                  <Text style={styles.btnlabel}>Avance</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Settings')} style={styles.label} >
                  <Image source={{ uri: props.picture }} style={styles.profileImage} /> 
                  <SettingLine fill="#858585" stroke='#858585' strokeWidth={0} width={24} height={24} />
                  <Text style={styles.btnlabel}>Ajustes</Text>
                </TouchableOpacity>  */}
      </View>
   );
 };
 const styles = StyleSheet.create({
   bottomView: {
     position: 'absolute',
     left: 30,
     zIndex: 1000
   },
   label:{
    padding: 18,
    alignContent: 'center',
    alignItems: 'center'
   },
   tabs: {
    height: 60,
    backgroundColor: 'rgba(41, 41, 41, 0.5)',
    borderRadius: 15,
    alignContent: 'end',
     justifyContent: 'center',
     alignItems: 'end',
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
     backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
    color: '#E3E3E3',
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






