import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
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

import PlanetList from '../components/planets';
import Tabs from '../components/tabs';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
      <ImageBackground  source={require('../assets/images/background.jpg')} style={[styles.container]}>
          <Text>Settings</Text>
      </ImageBackground>

      </View>
      <Tabs></Tabs>
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
});

export default SettingsScreen;