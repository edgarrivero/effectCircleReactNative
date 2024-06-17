import React, { useRef, useState }  from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  BounceIn, withTiming
} from 'react-native-reanimated';

import Svg, { Path } from 'react-native-svg';
import { BackSvg } from '../assets/data/svgs';

import LottieView from 'lottie-react-native';

function Level1Screen({navigation}) {

    const coheteRef = useRef(null); // Referencia al View del cohete
    const [leftPosition, setLeftPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para rastrear el índice actual
    const [cohetePosition, setCohetePosition] = useState({ x: 0, y: 0 }); // Estado para la posición del cohete

    const moveLeft = () => {
        if(cohetePosition.x >= 310){
            console.log("Paso la pantalla")
            navigation.navigate('Home');
        }

        setLeftPosition(leftPosition + 10); // Cambia la posición hacia la izquierda
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length);

        // Obtener la posición del cohete
        coheteRef.current.measure((x, y, width, height, pageX, pageY) => {
            setCohetePosition({ x: pageX, y: pageY });
        });
    };

    const dataArray = [
        {
            instruction: "Completa el espacio en blanco0",
            question: "What's your favorite movie or book?",
            answer: "My favorite book is 'To Kill a Mockingbird'."
        },
        {
            instruction: "Completa el espacio en blanco2",
            question: "What did you do last weekend?",
            answer: "I went hiking in the mountains."
        },
        {
            instruction: "Completa el espacio en blanco3",
            question: "What's your favorite food?",
            answer: "I love eating sushi."
        },
        {
            instruction: "Completa el espacio en blanco4",
            question: "Where do you want to travel next?",
            answer: "I want to visit Japan next year."
        },
        {
            instruction: "Completa el espacio en blanco5",
            question: "What's your favorite hobby?",
            answer: "I enjoy painting in my free time."
        }
    ];

  return (
    <View style={{ flex: 1 }}>
        <ImageBackground  source={require('../assets/images/fondo-questions.jpg')} style={[styles.container]}>
            <View style={styles.header}>
            
                <View style={styles.sectionBack} >
                    <View style={styles.btnBack}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={styles.back} >
                            <BackSvg  style={styles.backSvg} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionCohete}>
                        <View style={{ paddingTop: 11 }}>
                            <Image source={require('../assets/images/lineProgress.png')} style={[styles.lineProgress]} />            
                        </View>
                        
                        {/* <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/cohete.png')} style={[styles.cohete, { left: leftPosition }]} /> */}
                        <View ref={coheteRef} style={[styles.cohete, { left: leftPosition }]}>
                            <LottieView
                                autoPlay
                                style={{
                                width: 50,
                                height: 50,
                                }}
                                // Find more Lottie files at https://lottiefiles.com/featured
                                source={require('../assets/animations/RocketAnimation.json')}
                            />
                        </View>
                        
                    </View>
                </View>
                
                <Text style={styles.title}>{dataArray[currentIndex].instruction}</Text>
                <View>
                    <View  style={styles.headerQuestion}>
                        <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/level1-astronaut.png')} style={[styles.astronaut]} />
                        <Text style={styles.subTitle}>{dataArray[currentIndex].question}</Text>
                    </View>
                    <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/soil.png')} style={[styles.soil]} />
                    <View style={styles.question}>
                        <Text style={styles.textExample}>{dataArray[currentIndex].answer}</Text>
                        {/* Mostrar la posición del cohete */}
                        <View style={styles.positionInfo}>
                            <Text style={styles.positionText}>Posición del cohete: X: {cohetePosition.x}, Y: {cohetePosition.y}</Text>
                        </View>
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
        zIndex: 10,
        transform: [{ rotate: '90deg' }],
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
       marginTop: 15,
    },
    btnBack: {
        paddingHorizontal: 20,
    },
    back:{
        paddingTop: 12,
        paddingStart: 4,
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
        height: Dimensions.get('window').height - 300,
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
        borderRadius: 20,
        marginVertical: 40,
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
    textExample: { 
        marginTop: 45, 
        marginLeft: 20, 
        color: 'white', 
        fontSize: 30
    }
    
});

export default Level1Screen;