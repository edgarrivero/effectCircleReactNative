//import React from 'react';
// import { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet, useWindowDimensions, Image, ImageBackground, SafeAreaView } from 'react-native';

// import {
//   Gesture,
//   GestureDetector,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import data from '../data/data';
// import RenderItem from '../components/RenderItem';
// import ButtonCus from '../components/ButtonCus';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   useAnimatedReaction,
//   runOnJS, withTiming, clamp } from 'react-native-reanimated';
// import Circle from '../components/Circle';
// import Background from '../components/Background';

// import CustomImageCarousal from '../components/CustomImageCarousal';
 import PlanetList from '../components/planets';

// import CardContainer from '../components/CardContainer';

import {StyleSheet, SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardContainer from '../components/CardContainer';

import Tabs from '../components/tabs';


// import * as React from 'react';
// import {
//   StatusBar,
//   Image,
//   FlatList,
//   Dimensions,
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';
// const { width } = Dimensions.get('screen');
// // import { EvilIcons } from '@expo/vector-icons';
// import {
//   FlingGestureHandler,
//   Directions,
//   State,
//   GestureHandlerRootView
// } from 'react-native-gesture-handler';

// const DATA = [
//   {
//     title: 'Afro vibes',
//     location: 'Mumbai, India',
//     date: 'Nov 17th, 2020',
//     poster:
//       'https://raw.githubusercontent.com/edgarrivero/assets/main/planeta5.png',
//   },
//   {
//     title: 'Jungle Party',
//     location: 'Unknown',
//     date: 'Sept 3rd, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
//   },
//   {
//     title: '4th Of July',
//     location: 'New York, USA',
//     date: 'Oct 11th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
//   },
//   {
//     title: 'Summer festival',
//     location: 'Bucharest, Romania',
//     date: 'Aug 17th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
//   },
//   {
//     title: 'BBQ with friends',
//     location: 'Prague, Czech Republic',
//     date: 'Sept 11th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
//   },
//   {
//     title: 'Festival music',
//     location: 'Berlin, Germany',
//     date: 'Apr 21th, 2021',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
//   },
//   {
//     title: 'Beach House',
//     location: 'Liboa, Portugal',
//     date: 'Aug 12th, 2020',
//     poster:
//       'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
//   },
// ];

// const OVERFLOW_HEIGHT = 70;
// const SPACING = 10;
// const ITEM_WIDTH = width * 0.76;
// const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
// const VISIBLE_ITEMS = 3;


// const OverflowItems = ({ data, scrollXAnimated }) => {
//   const inputRange = [-1, 0, 1];
//   const translateY = scrollXAnimated.interpolate({
//     inputRange,
//     outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
//   });
//   return (
//     <View style={styles.overflowContainer}>
//       <Animated.View style={{ transform: [{ translateY }] }}>
//         {data.map((item, index) => {
//           return (
//             <View key={index} style={styles.itemContainer}>
//               <Text style={[styles.title]} numberOfLines={1}>
//                 {item.title}
//               </Text>
//               <View style={styles.itemContainerRow}>
//                 <Text style={[styles.location]}>
//                    {/* <EvilIcons
//                     name='location'
//                     size={16}
//                     color='black'
//                     style={{ marginRight: 5 }}
//                   />  */}
//                   {item.location}
//                 </Text>
//                 <Text style={[styles.date]}>{item.date}</Text>
//               </View>
//             </View>
//           );
//         })}
//       </Animated.View>
//     </View>
//   );
// };

const HomeScreen = ({ navigation, route }) => {

  const { user, picture } = route.params;

  

  //const {width: SCREEN_WIDTH} = useWindowDimensions();
  //  const x = useSharedValue(0);
  //  const context = useSharedValue(0);
  //  const [currentIndex, setCurrentIndex] = useState(0);
  //  const translateXStyle = useAnimatedStyle(() => {
  //    return {
  //      transform: [{translateX: x.value}],
  //    };
  //  });
  //  useAnimatedReaction(
  //    () => {
  //      return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
  //    },
  //    (currentValue, previousValue) => {
  //      if (currentValue !== previousValue) {
  //        runOnJS(setCurrentIndex)(currentValue);
  //      }
  //    },
  //  );
  //  const panGesture = Gesture.Pan()
  //    .onBegin(() => {
  //      context.value = Math.abs(x.value);
  //    })
  //    .onUpdate(e => {
  //      const clampValue = clamp(
  //        context.value - e.translationX,
  //        0,
  //        2 * SCREEN_WIDTH,
  //      );
  //      x.value = -clampValue;
  //    })
  //    .onEnd(e => {
  //      const isSwipeLeft = e.translationX < 0;
  //      const isSwipeRight = e.translationX > 0;
  //      const isBeyondLeftLimit =
  //        context.value < 2 * SCREEN_WIDTH && currentIndex <= 1;
  //      const isBeyondRightLimit = context.value > 0;
  //      let targetIndex;
  //      if (isSwipeLeft && isBeyondLeftLimit) {
  //        targetIndex =
  //          e.translationX < -SCREEN_WIDTH / 2 || e.velocityX < -500
  //            ? currentIndex + 1
  //            : currentIndex;
  //      } else if (isSwipeRight && isBeyondRightLimit) {
  //        targetIndex =
  //          e.translationX > SCREEN_WIDTH / 2 || e.velocityX > 500
  //            ? currentIndex
  //            : currentIndex + 1;
  //      }
  //      if (targetIndex !== undefined) {
  //        x.value = withTiming(-SCREEN_WIDTH * targetIndex, {
  //          duration: 500,
  //        });
  //      }
  //    });


    //  const data = [
    //   {
    //     image: require('../assets/images/planetas.png'),
    //   },
    //   {
    //     image: require('../assets/images/bg.png'),
    //   },
    //   {
    //     image: require('../assets/images/logo.png'),
    //   },
    //   {
    //     image: require('../assets/images/planetas.png'),
    //   },
    // ];
    const data = [
      {
        test: 1,
        image: require('../assets/image-product-1.jpg'),
      },
      {
        test: 2,
        image: require('../assets/image-product-2.jpg'),
      },
      {
        test: 3,
        image: require('../assets/image-product-3.jpg'),
      },
      {
        test: 4,
        image: require('../assets/image-product-4.jpg'),
      },
      {
        test: 5,
        image: require('../assets/image-product-1.jpg'),
      },
      {
        test: 6,
        image: require('../assets/image-product-2.jpg'),
      },
      {
        test: 7,
        image: require('../assets/image-product-3.jpg'),
      },
      {
        test: 8,
        image: require('../assets/image-product-4.jpg'),
      },
    ];





  //   const [data, setData] = React.useState(DATA);
  // const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  // const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  // const [index, setIndex] = React.useState(0);
  // const setActiveIndex = React.useCallback((activeIndex) => {
  //   scrollXIndex.setValue(activeIndex);
  //   setIndex(activeIndex);
  // });

  // React.useEffect(() => {
  //   if (index === data.length - VISIBLE_ITEMS - 1) {
  //     // get new data
  //     // fetch more data
  //     const newData = [...data, ...data];
  //     setData(newData);
  //   }
  // });

  // React.useEffect(() => {
  //   Animated.spring(scrollXAnimated, {
  //     toValue: scrollXIndex,
  //     useNativeDriver: true,
  //   }).start();
  // });

  // const { width, height } = useWindowDimensions();
  // const c = vec(width / 2, height / 2);
  // const r = c.x - 32;
  // const rect = useMemo(
  //   () => ({ x: 0, y: c.y, width, height: c.y }),
  //   [c.y, width]
  // );

  // const progress = useLoop({ duration: 2000 });
  // const start = useDerivedValue(
  //   () => sub(c, vec(0, mix(progress.value, r, r / 2))),
  //   [progress]
  // );
  // const end = useDerivedValue(
  //   () => add(c, vec(0, mix(progress.value, r, r / 2))),
  //   []
  // );
  // const radius = useDerivedValue(
  //   () => mix(progress.value, r, r / 2),
  //   [progress]
  // );

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

      <ImageBackground blurRadius={1} source={require('../assets/images/backgroundBlur1.jpg')} style={[styles.container]}>
          <PlanetList navigation={navigation}></PlanetList>
      </ImageBackground>
      <Tabs picture={picture}></Tabs>
      {/* <Button
        title="Go to Level1"
        onPress={() => navigation.navigate('Level1')}
      /> */}
      </View>
    </View>
    // <GestureHandlerRootView style={{flex: 2}}>
    //   <ImageBackground blurRadius={1} source={require('../assets/images/backgroundBlur1.jpg')} style={[styles.container]}>
    //     <SafeAreaView style={styles.container}>
    //       <CardContainer data={data} maxVisibleItems={3} />
    //     </SafeAreaView>
    //     {/* <PlanetList style={styles.box2} navigation={navigation}></PlanetList>   */}
    //     <Tabs picture={picture}></Tabs>
    //   </ImageBackground>
    // </GestureHandlerRootView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  // itemContainer: {
  //   height: OVERFLOW_HEIGHT,
  //   padding: SPACING * 2,
  // },
  // itemContainerRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // overflowContainer: {
  //   height: OVERFLOW_HEIGHT,
  //   overflow: 'hidden',                           
  // },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#08012C",
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
//     color: 'white'
//   },
//   error: {
//      margin: 20,
//      textAlign: 'center',
//      color: '#D8000C'
//   },
//   headerRightContainer: {
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 25,
//     backgroundColor: 'gray'
//   },
//   box2: {
//     backgroundColor: 'blue',
//     top: 60,
//     left: 20,
//   }
// });