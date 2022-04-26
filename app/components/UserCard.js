import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

import Colors from '../config/Colors'

/*
  
 */

function UserCard(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/mac-miller.jpg')} resizeMode="cover"/>
            <View style={styles.secondaryContainer}>
                <Text style={styles.title}>Mac Miller</Text>
                <Text style={styles.subTitle}>5 Listings</Text>
            </View>  
        </View>
    );
}

export default UserCard;

//You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    secondaryContainer: {
        width: "100%",
        padding: 12,
    },
    title:{
        fontSize: 18,
        color: Colors.black,
        fontWeight: "500",
        margin: 2
    },
    subTitle:{
        fontSize: 18,
        color: Colors.grey,
        fontWeight: "400",
        margin: 2
    }
})