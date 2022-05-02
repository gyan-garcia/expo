import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native'

// The goal of this component is so is used as the parent elemnent in all screens so it applies the 
// correct top padding depending on the platform is running on.

function Screen({ children }) {
    return (
        <SafeAreaView style = {styles.screen}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen;