import React from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import Colors from '../config/Colors';


function AppButton({text, color = Colors.primary, onPress}) {

    // Note: Check how on the style I am using an array, the first element to specify the whole style, 
    // but the second to override some of the styles. This way I can use the property directly on the 
    // styles. Also check the default value of the property.
    
    // Width this approach I can send recevied some style as well and apply both. The once defined by whoever
    // created this object, and the style defined on this object.

    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]}
            onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    container: {     
        borderRadius: 25,
        padding: 13,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: 8
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
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
