import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from './Card';
const CardContainer = ({data, maxVisibleItems}) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  const handleCardPress = () => {
    console.log("ajaaaa sirvio")
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            maxVisibleItems={maxVisibleItems}
            item={item}
            index={index}
            dataLength={data.length}
            animatedValue={animatedValue}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            key={index}
            onPressCustom={handleCardPress}
          />
        );
      })}

      
    </>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  
});
