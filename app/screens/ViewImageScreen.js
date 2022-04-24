import React from 'react';
import { View, StyleSheet, Image} from 'react-native';

import Colors from '../config/Colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

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
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        left: 30,
        top: 40
    },
    container:{
        flex: 1,
        backgroundColor: Colors.black
    },
    deleteIcon:{
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
        right: 30,
        top: 40
    },
    image:{
        width: '100%',
        height: '100%'
    }
})