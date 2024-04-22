import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  animationBg: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Animation4.json'),
    text: 'Enamorate del ingles',
    textColor: '#ffffff',
    backgroundColor: '#510bb1',
    animationBg: '#ffffff',
  },
  {
    id: 2,
    animation: require('../assets//animations/Animation5.json'),
    text: 'Brilla con Nosotros',
    textColor: '#000000',
    backgroundColor: '#ffda22',
    animationBg: '#ffffff',
  },
  {
    id: 3,
    animation: require('../assets//animations/Animation6.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#ffffff',
    backgroundColor: '#6c00ff',
    animationBg: '#ffffff',
  },
  {
    id: 4,
    animation: require('../assets/animations/Animation4.json'),
    text: 'Enamorate del ingles2',
    textColor: '#ffffff',
    backgroundColor: '#510bb1',
    animationBg: '#ffffff',
  }
];

export default data;
