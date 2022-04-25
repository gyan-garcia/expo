import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../config/Colors';


function AppButton({text, color}) {

    // Note: I add doing the styling in line for the view since I am using the parameter "color"
    // and I don't know how to pass that to the stylesheet object (adding a global variable
    // does not seem to work).
    return (
        <View style={{backgroundColor: color,         
            borderRadius: 20,
            padding: 13,
            width: "100%",
            alignItems: "center",
            margin: 8}} 
            onStartShouldSetResponder={() => alert('View Clicked')}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontWeight: '600',
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            },
            web: {
                fontSize: 25,
                fontFamily: "Curier"
            }, 
        })
    }, 
})
