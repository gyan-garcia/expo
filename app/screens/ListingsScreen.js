import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen'; 
import Listing from '../components/Listing';
import ListItemSeparator from '../components/ListItemSeparator';
import Card from '../components/Card';
import Colors from '../config/Colors';

const initialListings = [
    {
        id: 1,
        title: "Jacket for sale",
        price: '60',
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Harley for sale",
        price: '8000',
        image: require('../assets/harley_1.jpg')
    },
    {
        id: 3, 
        title: "Triump for sale",
        price: '7500',
        image: require('../assets/triump.jpg')
    }
];


function ListingsScreen(props) {

    const [listings, setListings] = useState(initialListings);  // <-- This returns an array. Postion 0 is the object, and position 1 is the method to upadte the object.
    const [refreshing, setRefreshing] = useState(false); // A bool state variable

    return (
        <Screen style={styles.screen}>
            {/* Flat list expects a string as the unique identifier, thats why is casting the id to a string*/}
            <FlatList
                data = {listings}
                keyExtractor = { listing => listing.id.toString() }
                renderItem = { ({item}) =>
                    <Card 
                        title = {item.title}
                        subTitle = {"$" + item.price}
                        image = { item.image } 
                        onPress = { () => console.log('messsage selected: ' , item) }
                        renderRightActions = { () => 
                            <ListItemDeleteAction onPress = {() => handleDelete(item)} /> } 
                    /> 
                } 
                ItemSeparatorComponent = { ListItemSeparator }
                refreshing = {refreshing}
                onRefresh = { () => setListings([    
                    {
                        id: 4, 
                        title: 'Tattos for sale',
                        subtitle: '300',
                        image: require('../assets/mac-miller.jpg')
                    }]) }
            /> 
        </Screen>);
}

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: Colors.light
    },
})