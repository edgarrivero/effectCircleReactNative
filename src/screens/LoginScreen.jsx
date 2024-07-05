import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

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

import LottieView from 'lottie-react-native';
import Google from '../assets/icon/google.svg';

function LoginScreen({ navigation }) {
    const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();
    const loggedIn = user !== undefined && user !== null;
 
    const onLogin = async () => {
        try {
            await authorize();

            if(loggedIn){
              const credentials = await getCredentials();
              console.log(user);
              console.log(credentials);
              navigation.navigate('Home', { credentials: credentials?.accessToken, user: user?.name, picture: user?.picture });
            }else{
              console.log("no ha iniciado sesion")
            }
            
            console.log(user);
        } catch (e) {
            console.log(e);
        }
      //await authorize({}, {});
      
      //Alert.alert('AccessToken: ' + credentials?.accessToken);
      
      //navigation.navigate('Home', { credentials: credentials?.accessToken, user: user?.name, picture:  user?.picture });
    };
 
     const onLogout = async () => {
       await clearSession({}, {});
     };

    if (isLoading) {
      return <View style={styles.container}><Text>Loading</Text></View>;
    }

    useEffect(() => {
      const delay = 2000; 
  
      const timeoutId = setTimeout(async () => {
        const credentials = await getCredentials();
        onLogin()
      }, delay);
  
      return () => {
        clearTimeout(timeoutId); 
      };
    }, []); 
 
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <View style={styles.container}>
           <View  style={[styles.container]}>
             <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/logo.png')} style={[styles.logo]} />
             <Animated.Image entering={FadeIn.duration(2000)} source={require('../assets/images/planetas.png')} style={[styles.planetas]} />
             {/* <Animated.Image entering={BounceIn.duration(3000)} source={require('./assets/astronauta.png')} style={[styles.astronauta]} />  */}
             <View style={styles.astronauta}>
               <LottieView
                 autoPlay
                 style={{
                   width: 500,
                   height: 500,
                 }}
                 // Find more Lottie files at https://lottiefiles.com/featured
                 source={require('../assets/jsons/animation_astronauta.json')}
               />
             </View>
             <Animated.View entering={FadeIn.duration(2000)} style={styles.containerBtn}>
               <TouchableOpacity onPress={loggedIn ? onLogout : onLogin} style={styles.button}>
                <Text style={styles.buttonText}>{loggedIn ? 'Cerrar Sesion' : 'Iniciar'}</Text>
               </TouchableOpacity>
             </Animated.View>
           </View>
         </View>
     </View>
     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     //   <Text>Home Screen</Text>
     //     <Text style={styles.header}> Auth0Sample - Login </Text>
     //     {user && <Text>You are logged in as edgar edgar {user.name}</Text>}
     //     {!user && <Text>You are not logged in</Text>}
     //     <Button
     //       onPress={loggedIn ? onLogout : onLogin}
     //       title={loggedIn ? 'Log Out' : 'Log In'}
     //     />
     //     {error && <Text style={styles.error}>{error.message}</Text>}
     //     {/* <Button
     //       title="Go to Details"
     //       onPress={() => navigation.navigate('Details')}
     //     /> */}
     // </View>
   );
 }

 export default LoginScreen;

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#000228'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 9999999,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C'
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
    backgroundColor: '#FF8E00',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 55,
    marginTop: 370,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});