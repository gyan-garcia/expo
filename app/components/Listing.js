import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/Colors'
import AppText from './AppText'

function Listing({image, title, subtitle}) {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={image}/>
            <View style={styles.subContainer}>
                <AppText textStyle={styles.title}>{title}</AppText>
                <AppText textStyle={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}

export default Listing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 15,
        overflow: 'hidden' // With this property the child elements won't get out of the parent layout. For instance, 
        // this is necessary if I want to make sure the border radious is respected in the case there is an image on an edge.
    },
    image:{
        height: 200,
        width: "100%"
    },
    subContainer:{
        padding: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
        color: Colors.black,
    },
    subtitle:{
        fontSize: 20,
        fontWeight: "500",
        color: Colors.secondary,
        marginVertical: 10
    },
})