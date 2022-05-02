import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../config/Colors'

function Card({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} 
                source={image}
                resizeMode="cover"/>
            <View style={styles.textContainer}>
                <Text style={styles.description}>{title}</Text>
                <Text style={styles.price}>{subTitle}</Text>
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
        backgroundColor: Colors.white, 
        overflow: 'hidden' // With this property the child elements won't get out of the layout. 
    },
    photo:{
        height: 200,
        width: "100%",
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
        fontWeight: "bold"
    }
})