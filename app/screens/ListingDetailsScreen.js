import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../config/Colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.subContainer}>
                <AppText textStyle={styles.title}>Red Jacket for sale</AppText>
                <AppText textStyle={styles.price}>$100</AppText>
                <View style={styles.userContainer}> 
                    <ListItem
                        image={require('../assets/mac-miller.jpg')}
                        title='Mac Miller'
                        subTitle='5 Listings' />
                </View>
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
        height: 300,
        width: "100%"
    },
    subContainer:{
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
        color: Colors.black,
    },
    price:{
        fontSize: 20,
        fontWeight: "500",
        color: Colors.secondary,
        marginVertical: 10
    },
    userContainer:{
        marginVertical: 30
    }
})