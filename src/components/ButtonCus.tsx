import {View,Text,Pressable, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  clamp,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {OnboardingData} from '../data/data';
import Arrow from '../assets/icon/Arrow.svg';
//import {RootStackParamList} from '../navigator/RootNavigator';
//import {StackNavigationProp} from '@react-navigation/stack';
//import {useNavigation} from '@react-navigation/native';

type Props = {
  data: OnboardingData[];
  screenWidth: number;
  x: SharedValue<number>;
  currentIndex: number;
};

const RADIUS = 100;

const ButtonCus = ({data, screenWidth, x,currentIndex }: Props) => {

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const animatedOpacityButton = useAnimatedStyle(() => {
    const opacity = interpolate(
      Math.abs(x.value % screenWidth),
      [0, 40],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  const isLastScreen = currentIndex >= data.length - 1;

  return (
    <AnimatedPressable  
      style={[styles.button, animatedOpacityButton]} 
      onPress={() => {
        if (Math.abs(x.value) % screenWidth === 0) {
          if (!isLastScreen) {
            const clampValue = clamp(Math.abs(x.value) + screenWidth, 0, 2 * screenWidth);
            x.value = withTiming(-clampValue, { duration: 1000 });
          } else {
            // Aquí puedes manejar lo que sucede después de pasar las tres pantallas
            console.log('Ya pasaste las tres pantallas');
          }
        }
      }}>
      <Arrow
        stroke={data[currentIndex].backgroundColor}
        width={40}
        height={40}
      />
    </AnimatedPressable>
  );
};

export default ButtonCus;

const styles = StyleSheet.create({
  button: {
    zIndex: 9999999,
    position: 'absolute',
    width: RADIUS,
    height: RADIUS,
    borderRadius: RADIUS,
    bottom: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
