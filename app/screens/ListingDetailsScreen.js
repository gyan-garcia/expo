import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../config/Colors';
import UserCard from '../components/UserCard';

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Red Jacket for sale</Text>
                <Text style={styles.subTitle}>$100</Text>
                <UserCard/>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    image:{
        height: 240,
        width: "100%"
    },
    subContainer:{
        padding: 20,
    },
    title:{
        fontSize: 22,
        fontWeight: "600",
        color: Colors.black,
        margin: 5
    },
    subTitle:{
        fontSize: 18,
        fontWeight: "500",
        color: Colors.secondary,
        margin: 5
    }
})