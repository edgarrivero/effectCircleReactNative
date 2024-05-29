import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, View, Text, Image, Dimensions} from 'react-native';
import PlanetList from '../components/planets';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardContainer from '../components/CardContainer';

import Tabs from '../components/tabs';

/* eslint-disable react-native/no-inline-styles */
//import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {SystemBars} from 'react-native-bars';
import {data} from '../data';

import {
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import CustomImageCarousalSquare from '../components/carousel/CustomImageCarousalSquare';
import CustomImageCarousalLandscape from '../components/carousel/CustomImageCarousalLandscape';
import { LogoCuadrado } from '../components/Iconos/HouseSvg';


const HomeScreen = ({ navigation, route }) => {


  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 3;

  const animatedStyle = useAnimatedStyle(() => {
    if (animatedValue.value > currentIndex + 0.5) {
      runOnJS(setActivityIndex)(currentIndex + 1);
    } else {
      runOnJS(setActivityIndex)(currentIndex);
    }
    const opacity = interpolate(
      animatedValue.value,
      [currentIndex, currentIndex + 0.3, currentIndex + 0.8, currentIndex + 1],
      [1, 0, 0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity: opacity,
    };
  });


  //const { user, picture } = route.params;

    // const data = [
    //   {
    //     test: 1,
    //     image: require('../assets/image-product-1.jpg'),
    //   },
    //   {
    //     test: 2,
    //     image: require('../assets/image-product-2.jpg'),
    //   },
    //   {
    //     test: 3,
    //     image: require('../assets/image-product-3.jpg'),
    //   },
    //   {
    //     test: 4,
    //     image: require('../assets/image-product-4.jpg'),
    //   },
    //   {
    //     test: 5,
    //     image: require('../assets/image-product-1.jpg'),
    //   },
    //   {
    //     test: 6,
    //     image: require('../assets/image-product-2.jpg'),
    //   },
    //   {
    //     test: 7,
    //     image: require('../assets/image-product-3.jpg'),
    //   },
    //   {
    //     test: 8,
    //     image: require('../assets/image-product-4.jpg'),
    //   },
    // ];

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: user,
  //     headerRight: () => (
  //       <View style={styles.headerRightContainer}>
  //         <Image
  //           style={styles.profileImage}
  //           source={{ uri: picture }}
  //         />
  //       </View>
  //     ),
  //   });
  // }, []);

  const data = [
    {
      image: require('../assets/image-product-1.jpg'),
    },
    {
      image: require('../assets/image-product-2.jpg'),
    },
    {
      image: require('../assets/image-product-3.jpg'),
    },
    {
      image: require('../assets/image-product-4.jpg'),
    },
  ];
  const data2 = [
    {
      image: require('../assets/image-product-1-landscape.jpg'),
    },
    {
      image: require('../assets/image-product-2-landscape.jpg'),
    },
    {
      image: require('../assets/image-product-3-landscape.jpg'),
    },
    {
      image: require('../assets/image-product-4-landscape.jpg'),
    },
  ];

  return (
      
    <View style={{ flex: 1 }}>
      <ImageBackground blurRadius={1} source={require('../assets/images/backgroundBlur1.jpg')} style={[styles.containerImage]}>
        <View style={styles.container}>
          
            <View style={styles.header}>
              <Image style={styles.imageHeader}  source={require('../assets/images/logo_cuadrado.png')}  />
            </View>
              
              {/* <View style={{position: 'relative'}}>
                <View style={styles.carouselContainer}>
                  <Text style={styles.text}>Iniciales</Text>
                  <CustomImageCarousalSquare
                    navigation={navigation}
                    data={data}
                    autoPlay={false}
                    pagination={true}
                  />
                </View>  
              </View>   */}

                <PlanetList navigation={navigation}></PlanetList>    

              
                
                
                {/* <View style={styles.carouselContainer}>
                  <Text style={styles.text}>Image Carousel Landscape</Text>
                  <CustomImageCarousalLandscape
                    data={data2}
                    autoPlay={false}
                    pagination={true}
                  />
                </View> */}
              

              <Tabs></Tabs>
          
              {/* <Button
                title="Go to Level1"
                onPress={() => navigation.navigate('Level1')}
              /> */}
          </View>
        </ImageBackground> 
      
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header:{
    paddingTop: 12,
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: 'rgba(41, 41, 41, 0.7)',
    borderRadius: 15,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center'
  },
  imageHeader: {
    width: 34,
    height: 34
  },
  containerImage: {
    height: '100%'
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
  text: {
    textAlign: 'center', 
    color: '#ABABAB', 
    marginBottom: 10,
    fontSize: 26,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginTop: 40,
    marginBottom: 20,
    zIndex: 1
  },
});
