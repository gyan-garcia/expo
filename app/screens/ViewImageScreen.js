import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/Colors';

function ViewImageScreen(props) {

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="close" size={35} color={Colors.white} style={styles.closeIcon}/>
            <MaterialCommunityIcons name="trash-can-outline" size={35} color={Colors.white} style={styles.deleteIcon}/>
            
            <Image resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon:{
        position: "absolute",
        left: 30,
        top: 40
    },
    container:{
        flex: 1,
        backgroundColor: Colors.black
    },
    deleteIcon:{
        position: "absolute",
        right: 30,
        top: 40
    },
    image:{
        width: '100%',
        height: '100%'
    }
})