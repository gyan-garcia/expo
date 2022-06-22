import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

//import AppButton from './app/components/AppButton'

// Note, check that if I wanto to have an specific OS implementation for a components
// I can name the component like *.ios.js and *android.js and react native will pick up the
// correct one depending on the platform. This is useful if I want to have specific logic. Otherwise I should jus
// use ...Platform.select inside the component styles.
//import AppText from './app/components/AppText';

// Temp code just for testing
const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];


export default function App() {
  // if I just adde the property secureTextEntry, is the same as 
  // typing secureTextEntry = {true}
  const [isNew, setIsNew] = useState(false);

  // A variable where to store the current selection
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppTextInput icon='email' placeholder='User Name yo'/>
      <Switch vaule={isNew} onValueChange = {(newValue) => setIsNew(newValue)}/>
      <AppPicker
        selectedItem = {category}
        onSelectItem = { item => setCategory(item)} 
        items = {categories} icon='apps' placeholder='Category' />
    </Screen>
    
  );
}

const styles = StyleSheet.create({

})