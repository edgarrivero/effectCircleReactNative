import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions, Image, ImageBackground, SafeAreaView } from 'react-native';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import data from '../data/data';
import RenderItem from '../components/RenderItem';
import ButtonCus from '../components/ButtonCus';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue,
  useAnimatedReaction,
  runOnJS, withTiming, clamp } from 'react-native-reanimated';
import Circle from '../components/Circle';
import Background from '../components/Background';

import CustomImageCarousal from '../components/CustomImageCarousal';
import Tabs from '../components/tabs';
import PlanetList from '../components/planets';

const HomeScreen = ({ navigation, route }) => {

  const { credentials, user, picture } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: user,
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: picture }} 
          />
        </View>
      ),
    });
  }, []);

   const {width: SCREEN_WIDTH} = useWindowDimensions();
   const x = useSharedValue(0);
   const context = useSharedValue(0);
   const [currentIndex, setCurrentIndex] = useState(0);
   const translateXStyle = useAnimatedStyle(() => {
     return {
       transform: [{translateX: x.value}],
     };
   });
   useAnimatedReaction(
     () => {
       return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
     },
     (currentValue, previousValue) => {
       if (currentValue !== previousValue) {
         runOnJS(setCurrentIndex)(currentValue);
       }
     },
   );
   const panGesture = Gesture.Pan()
     .onBegin(() => {
       context.value = Math.abs(x.value);
     })
     .onUpdate(e => {
       const clampValue = clamp(
         context.value - e.translationX,
         0,
         2 * SCREEN_WIDTH,
       );
       x.value = -clampValue;
     })
     .onEnd(e => {
       const isSwipeLeft = e.translationX < 0;
       const isSwipeRight = e.translationX > 0;
       const isBeyondLeftLimit =
         context.value < 2 * SCREEN_WIDTH && currentIndex <= 1;
       const isBeyondRightLimit = context.value > 0;
       let targetIndex;
       if (isSwipeLeft && isBeyondLeftLimit) {
         targetIndex =
           e.translationX < -SCREEN_WIDTH / 2 || e.velocityX < -500
             ? currentIndex + 1
             : currentIndex;
       } else if (isSwipeRight && isBeyondRightLimit) {
         targetIndex =
           e.translationX > SCREEN_WIDTH / 2 || e.velocityX > 500
             ? currentIndex
             : currentIndex + 1;
       }
       if (targetIndex !== undefined) {
         x.value = withTiming(-SCREEN_WIDTH * targetIndex, {
           duration: 500,
         });
       }
     });


     const data = [
      {
        image: require('../assets/images/planetas.png'),
      },
      {
        image: require('../assets/images/bg.png'),
      },
      {
        image: require('../assets/images/logo.png'),
      },
      {
        image: require('../assets/images/planetas.png'),
      },
    ];

  return (
      // <GestureHandlerRootView style={{ flex: 1 }}>
      //     <View style={styles.container}>
      //       <Circle data={data} screenWidth={SCREEN_WIDTH} x={x} />
      //       <Background data={data} screenWidth={SCREEN_WIDTH} x={x} />
      //       <GestureDetector gesture={panGesture}>
      //         <Animated.View 
      //           style={[
      //             styles.listContainer, 
      //             {
      //               width: data.length * SCREEN_WIDTH,
      //             },
      //             translateXStyle,
      //           ]}>
      //           {data.map((item,index) => {
      //             return <RenderItem item={item} index={index} key={index} x={x} />;
      //           })}
      //         </Animated.View>
      //       </GestureDetector>
      
      //     </View>
      //     <ButtonCus
      //         data={data}
      //         x={x}
      //         screenWidth={SCREEN_WIDTH}
      //         currentIndex={currentIndex}
      //         navigation={navigation}
      //       />
      //   </GestureHandlerRootView>

    // <View style={styles.container}>

    //   <Text style={styles.header}>Welcome!</Text>
      
    //   {/* <Text style={styles.header}>AccessToken: {credentials}</Text> */}
    //   <Text style={styles.header}>{user}</Text>
    
    //   {/* <SafeAreaView style={styles.container}>
    //     <View style={styles.carouselContainer}>
    //       <Text style={styles.text}>Image Carousel Square</Text>
    //       <CustomImageCarousal data={data} autoPlay={true} pagination={true} />
    //     </View>
    //   </SafeAreaView> */}

      
    //   <Tabs></Tabs>
    //   {/* <Button
    //     title="Go Back"
    //     onPress={() => navigation.goBack()} 
    //   /> */}
    // </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
      
      <ImageBackground blurRadius={5} source={require('../assets/images/background.jpg')} style={[styles.container]}>
          <PlanetList navigation={navigation}></PlanetList>
      </ImageBackground>
      <Tabs picture={picture}></Tabs>
      {/* <Button
        title="Go to Level1"
        onPress={() => navigation.navigate('Level1')}
      /> */}
      </View>
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: "#08012C"
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
    color: 'white'
  },
  error: {
     margin: 20,
     textAlign: 'center',
     color: '#D8000C'
  },
  headerRightContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'gray'
  },
});