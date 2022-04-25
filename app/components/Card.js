import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../config/Colors'

function Card(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} 
                source={require('../assets/jacket.jpg')}
                resizeMode="cover"/>
            <View style={styles.textContainer}>
                <Text style={styles.description}>Black Jacket for sale!</Text>
                <Text style={styles.price}>$100</Text>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container:{
        height: 250,
        width: "100%",
        borderRadius: 15,
        backgroundColor: Colors.white
    },
    photo:{
        height: 190,
        width: "100%",
        borderTopLeftRadius: 15,  // This is weird, I would asume the image would respect the radius of the parent
        borderTopRightRadius: 15,
    },
    textContainer: {
        flex: 1,
        padding: 12,
    },
    description: {
        margin: 1
    },
    price: {
        margin: 1,
        color: Colors.secondary,
        fontWeight: "700"
    }
})