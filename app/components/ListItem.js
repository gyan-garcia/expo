import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

import Colors from '../config/Colors'
import AppText from './AppText'

/*
  
 */

function ListItem({image, title, subTitle}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} resizeMode="cover"/>
            <View style={styles.secondaryContainer}>
                <AppText textStyle={styles.title}>{title}</AppText>
                <AppText textStyle={styles.subTitle}>{subTitle}</AppText>
            </View>  
        </View>
    );
}

export default ListItem;

//You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    secondaryContainer: {
        width: "100%",
        padding: 5,
    },
    title:{
        fontSize: 18,
        color: Colors.black,
        fontWeight: "500",
        margin: 2
    },
    subTitle:{
        fontSize: 18,
        color: Colors.medium,
        fontWeight: "400",
        margin: 2
    }
})