import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  BounceIn,
} from 'react-native-reanimated';

import Svg, { Path } from 'react-native-svg';
import { BackSvg } from '../assets/data/svgs';

function Level1Screen({navigation}) {

    const [leftPosition, setLeftPosition] = useState(0);

    const moveLeft = () => {
        setLeftPosition(leftPosition + 10); // Cambia la posición hacia la izquierda
    };

  return (
    <View style={{ flex: 1 }}>
        <ImageBackground  source={require('../assets/images/fondo-questions.jpg')} style={[styles.container]}>
            <View style={styles.header}>
            
                <View style={styles.sectionBack} >
                    <View style={styles.btnBack}>
                        <TouchableOpacity onPress={() => navigation.navigate('Sparkles')}  style={styles.back} >
                            <BackSvg  style={styles.backSvg} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionCohete}>
                        <View style={{ paddingTop: 11 }}>
                        <Image source={require('../assets/images/lineProgress.png')} style={[styles.lineProgress]} />            
                        </View>
                        
                        <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/cohete.png')} style={[styles.cohete, { left: leftPosition }]} />
                    </View>
                </View>
                
                <Text style={styles.title}>Completa el espacio en blanco y si es mas largo el texto que pasa</Text>
                <View>
                    <View  style={styles.headerQuestion}>
                        <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/level1-astronaut.png')} style={[styles.astronaut]} />
                        <Text style={styles.subTitle}>What's your favorite movie or book? pero que es esta huevada</Text>
                    </View>
                    <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/soil.png')} style={[styles.soil]} />
                    <View style={styles.question}>
                        <Text style={{ marginTop: 50 }}>edgar y aqui que fue</Text>
                        <TouchableOpacity onPress={moveLeft} style={styles.button}>
                            <Text style={styles.buttonText}>Comprobar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    sectionBack: {
        flexDirection: 'row'
    },
    sectionCohete: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    cohete: {
        position: 'absolute',
        top: 0,
        left: -10,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        zIndex: 10
    },
    lineProgress: {
        width: Dimensions.get('window').width - 120,
        resizeMode: 'contain',
    },
    questionSection:{
        flexDirection: 'row',
        position: 'relative'
    },
    headerQuestion: {
        flexDirection: 'row',
        marginHorizontal: 30
    },
    header:{
       marginTop: 40,
    },
    btnBack: {
        paddingHorizontal: 20,
    },
    back:{
        paddingTop: 10,
        paddingStart: 4,
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        color: 'white',
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 30,
        marginHorizontal: 30
    },
    subTitle: {
        color: "white",
        fontSize: 20,
        marginHorizontal: 30,
        zIndex: 5,
        maxWidth: 220
    },
    soil: {
        position: 'absolute',
        top: -70,
        resizeMode: 'contain',
        width: '100%',
        padding: 0,
        margin: 0,
        zIndex: 1
    },
    question: {
        backgroundColor: '#754c29',
        height: Dimensions.get('window').height - 330,
        position: 'relative'
    },
    astronaut: {
        width: 90,
        height: 120,
        marginTop: 40,
        resizeMode: 'contain',
        zIndex: 2
    },
    button: {
        position: 'absolute',
        bottom: 5,
        width: Dimensions.get('window').width - 80,
        backgroundColor: '#fbae17',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        marginVertical: 30,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginHorizontal: 40,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default Level1Screen;