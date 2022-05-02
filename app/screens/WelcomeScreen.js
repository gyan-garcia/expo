import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../config/Colors';
import Card from '../components/Card';

function WelcomeScreen(props) {

    return (
    <ImageBackground 
        style = {styles.background}
        source={require('../assets/background.jpg')}
        blurRadius={8}>

        <View style = {styles.logoContainer}>
            <Image source={require('../assets/logo-red.png')} style = {styles.logo}/>
            <Text style = {styles.text}>Sell what you don't need</Text>
        </View>

        <AppButton text="LOGIN" color={Colors.primary} onPress={() => console.log("login")}/>
        <AppButton text="SIGN UP" color={Colors.secondary} onPress={() => console.log("sign up")}/>
        
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
    },
    logo:{
        width: 80,
        height: 80,
        margin: 15
    },
    logoContainer:{
        position: "absolute",
        top: 60,
        alignItems: "center"
    },
    text:{
        fontWeight: "600",
        fontSize: 25
    }
})

export default WelcomeScreen;