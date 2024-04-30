// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import React, {useState} from 'react';
// // import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView, Alert, Button,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   useWindowDimensions,
//   View,
// } from 'react-native';
// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';
// import {
//   Gesture,
//   GestureDetector,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import data from './src/data/data';
// import RenderItem from './src/components/RenderItem';
// import ButtonCus from './src/components/ButtonCus';
// import Animated, { 
//   useAnimatedStyle, 
//   useSharedValue,
//   useAnimatedReaction,
//   runOnJS, withTiming, clamp } from 'react-native-reanimated';
// import Background from './src/components/Background';
// import Circle from './src/components/Circle';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import {useAuth0, Auth0Provider} from 'react-native-auth0';

// const Home = () => {
//   const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();

//   const onLogin = async () => {
//     await authorize({}, {});
//     const credentials = await getCredentials();
//     Alert.alert('AccessToken: ' + credentials?.accessToken);

//     // Navega a la pantalla LoggedInScreen después del inicio de sesión
//     navigation.navigate('LoggedIn');
//   };

//   const loggedIn = user !== undefined && user !== null;

//   const onLogout = async () => {
//     await clearSession({}, {});
//   };


//   if (isLoading) {
//     return <View style={styles.container}><Text>Loading</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}> Auth0Sample - Login </Text>
//       {user && <Text>You are logged in as edgar edgar {user.name}</Text>}
//       {!user && <Text>You are not logged in</Text>}
//       <Button
//         onPress={loggedIn ? onLogout : onLogin}
//         title={loggedIn ? 'Log Out' : 'Log In'}
//       />
//       {error && <Text style={styles.error}>{error.message}</Text>}
//     </View>
//   );
// };


// function App(): React.JSX.Element {
//   const {width: SCREEN_WIDTH} = useWindowDimensions();
//   const x = useSharedValue(0);
//   const context = useSharedValue(0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const translateXStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: x.value}],
//     };
//   });

//   useAnimatedReaction(
//     () => {
//       return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
//     },
//     (currentValue, previousValue) => {
//       if (currentValue !== previousValue) {
//         runOnJS(setCurrentIndex)(currentValue);
//       }
//     },
//   );

//   const panGesture = Gesture.Pan()
//     .onBegin(() => {
//       context.value = Math.abs(x.value);
//     })
//     .onUpdate(e => {
//       const clampValue = clamp(
//         context.value - e.translationX,
//         0,
//         2 * SCREEN_WIDTH,
//       );

//       x.value = -clampValue;
//     })
//     .onEnd(e => {
//       const isSwipeLeft = e.translationX < 0;
//       const isSwipeRight = e.translationX > 0;
//       const isBeyondLeftLimit =
//         context.value < 2 * SCREEN_WIDTH && currentIndex <= 1;
//       const isBeyondRightLimit = context.value > 0;

//       let targetIndex;

//       if (isSwipeLeft && isBeyondLeftLimit) {
//         targetIndex =
//           e.translationX < -SCREEN_WIDTH / 2 || e.velocityX < -500
//             ? currentIndex + 1
//             : currentIndex;
//       } else if (isSwipeRight && isBeyondRightLimit) {
//         targetIndex =
//           e.translationX > SCREEN_WIDTH / 2 || e.velocityX > 500
//             ? currentIndex
//             : currentIndex + 1;
//       }

//       if (targetIndex !== undefined) {
//         x.value = withTiming(-SCREEN_WIDTH * targetIndex, {
//           duration: 500,
//         });
//       }
//     });

//   return (
//     <Auth0Provider domain={"spacenglish.us.auth0.com"} clientId={"a2AO52J20GTePXEgBuE1dqTdThPnGzcO"}>
//       {/* <GestureHandlerRootView style={{ flex: 1 }}>
//         <View style={styles.container}>
//           <Circle data={data} screenWidth={SCREEN_WIDTH} x={x} />
//           <Background data={data} screenWidth={SCREEN_WIDTH} x={x} />
//           <GestureDetector gesture={panGesture}>
//             <Animated.View 
//               style={[
//                 styles.listContainer, 
//                 {
//                   width: data.length * SCREEN_WIDTH,
//                 },
//                 translateXStyle,
//               ]}>
//               {data.map((item,index) => {
//                 return <RenderItem item={item} index={index} key={index} x={x} />;
//               })}
//             </Animated.View>
//           </GestureDetector>
          
//         </View>
//         <ButtonCus
//             data={data}
//             x={x}
//             screenWidth={SCREEN_WIDTH}
//             currentIndex={currentIndex}
//           />
//       </GestureHandlerRootView> */}
//       <Home />
//     </Auth0Provider>
    
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   listContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     zIndex: 9999999,
//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   error: {
//     margin: 20,
//     textAlign: 'center',
//     color: '#D8000C'
//   }
// });
// export default App;


// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

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





const Stack = createNativeStackNavigator();

function App() {
  return (
    <Auth0Provider domain={"spacenglish.us.auth0.com"} clientId={"a2AO52J20GTePXEgBuE1dqTdThPnGzcO"}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
          })}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}

export default App;

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