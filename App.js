import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
//import AppButton from './app/components/AppButton'

// Note, check that if I wanto to have an specific OS implementation for a components
// I can name the component like *.ios.js and *android.js and react native will pick up the
// correct one depending on the platform. This is useful if I want to have specific logic. Otherwise I should jus
// use ...Platform.select inside the component styles.
//import AppText from './app/components/AppText';


import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <ViewImageScreen/>
    
  );
}

