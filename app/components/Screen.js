import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View } from 'react-native'

import Colors from '../config/Colors';
// The goal of this component is so is used as the parent element in all screens so it applies the 
// correct top padding depending on the platform is running on.

// SafeAreView only works for iPhone, for Android we need to add platform specific code, or use Constants.statusBarHeight

function Screen({children, style}) {
    return (
        // Check how we ar are applying two styles. The firts one defined on this file, and the second received as a prop.

        // ALSO, SafeAreaView does not really support padding on the sides (only on top), so that is why we need to create an internal view to hold everything 
        // where we can apply padding (if included on the style prop)
        <SafeAreaView style = {[styles.screen, style]}>
            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1, // So wherever used this component takes the whole screen.
        backgroundColor: Colors.white,
    }
})

export default Screen;