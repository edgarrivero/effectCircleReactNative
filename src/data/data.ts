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
    animation: require('../assets/animations/Animation1.json'),
    text: 'Descubre el universo del inglés',
    textColor: '#ffffff',
    backgroundColor: '#510bb1',
    animationBg: '#ffffff',
  },
  {
    id: 2,
    animation: require('../assets/animations/Animation2.json'),
    text: 'Viaja más allá de las estrellas',
    textColor: '#000000',
    backgroundColor: '#ffda22',
    animationBg: '#ffffff',
  },
  {
    id: 3,
    animation: require('../assets/animations/Animation4.json'),
    text: 'Empecemos',
    textColor: '#ffffff',
    backgroundColor: '#6c00ff',
    animationBg: '#ffffff',
  }
];

export default data;
