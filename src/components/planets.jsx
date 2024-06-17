import React, { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet, FlatList, Dimensions, TouchableOpacity  } from 'react-native'; // Asegúrate de importar las dependencias necesarias.
import planetas from '../../src/assets/data/planetas';
import Animated from 'react-native-reanimated';


const PlanetList = ({ navigation }) => {

  return (
    <View style={{flex: 2}}>
      <FlatList
      data={planetas}
      contentContainerStyle={{padding: 20}}
      style={styles.container}
      renderItem={({ item: planeta }) => (
        
          <View style={[styles.planetaContainer, { 
                        alignItems: 'center', 
                        justifyContent: planeta.justifyContent, 
                        height: planeta.height, 
                        paddingLeft: planeta.paddingLeft 
                      }]}>
            <TouchableOpacity onPress={() => navigation.navigate(planeta.navigateTo)}>
              <Image
                source={{ uri: planeta.imagen }}
                style={[styles.planetaImagen, { width: planeta.with }]}
                accessibilityLabel={planeta.nombre}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.text}>{planeta.nombre}</Text>
            </View>
            
          </View>    

      )}
      keyExtractor={(item, index) => index.toString()}
    />
      
    </View>
  );
};

export default PlanetList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    zIndex: 5,
    paddingBottom: 80,
    marginBottom: 70,
    },
  planetaContainer: {
      width: Dimensions.get('window').width - 80,
      flexDirection: 'row',
      padding: 10,
      marginBottom: 60
  },
  planetaImagen: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  text: {
    color: '#B6B6B6',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  shadowBtn: {
    shadowColor: "#B6B6B6",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16, // Android
  }
})






