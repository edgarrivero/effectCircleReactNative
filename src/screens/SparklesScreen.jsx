import React from 'react';
import { View,Button, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  FadeIn,
  FadeInDown,
  FadeOutDown,
  FadeOut,
  BounceIn,
  BounceOut,
  Easing,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlanetList from '../components/planets';
import Tabs from '../components/tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BooksScreen from './BooksScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

 //Icons
 import homeSolidIcon from '../assets/icons/home-solid.png';
 import homeLineIcon from '../assets/icons/home-line.png';
 import sparklesSolidIcon from '../assets/icons/sparkles-solid.png';
 import sparklesLineIcon from '../assets/icons/sparkles-line.png';
 import booksSolidIcon from '../assets/icons/books-solid.png';
 import booksLineIcon from '../assets/icons/books-line.png';
 import settingsSolidIcon from '../assets/icons/setting-solid.png';
 import settingsLineIcon from '../assets/icons/setting-line.png';
 import LottieView from 'lottie-react-native';

const Tab = createBottomTabNavigator();

function SparklesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
      
      <ImageBackground  source={require('../assets/images/background.jpg')} style={[styles.container]}>
          <PlanetList navigation={navigation}></PlanetList>
      </ImageBackground>
      <Tabs></Tabs>
      {/* <Button
        title="Go to Level1"
        onPress={() => navigation.navigate('Level1')}
      /> */}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  logo: {
     maxWidth: 300,
     resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
     justifyContent: 'center',
     alignItems: 'flex-end',
     marginTop: 30,
     zIndex: 30,
   },
   planetas: {
    position: 'absolute',
    top: -10,
    zIndex: 0,
    maxWidth: 350,
    resizeMode: 'contain',
  },
   astronauta: {
    position: 'absolute',
    top: 150,
    left: -50,
    zIndex: 10,
    maxWidth: 350,
    resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
    marginBottom: 200
  },
  containerBtn: {
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#fbae17',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginTop: 370,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',

  },
  icon: { width: 30, height: 30 },
  canvas: {
    position: 'absolute',
    top: 150,
    left: -50,
    zIndex: 100,
    maxWidth: 350,
    resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
    marginBottom: 200
  }
});

export default SparklesScreen;