import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen'; 
import Listing from '../components/Listing';
import ListItemSeparator from '../components/ListItemSeparator';

const initialListings = [
    {
        id: 1,
        title: "Jacket for sale",
        subtitle: '$60',
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Harley for sale",
        subtitle: '$8000',
        image: require('../assets/harley_1.jpg')
    },
    {
        id: 3, 
        title: "Triump for sale",
        subtitle: '$7500',
        image: require('../assets/triump.jpg')
    }
];


function ListingsScreen(props) {

    const [listings, setListings] = useState(initialListings);  // <-- This returns an array. Postion 0 is the object, and position 1 is the method to upadte the object.
    const [refreshing, setRefreshing] = useState(false); // A bool state variable
/* 
        <Screen>
            <View style={styles.mainContainer}>
                <Listing image={require('../assets/jacket.jpg')} title="Jacket for sale" subtitle="$100"/>
                <Listing image={require('../assets/harley_1.jpg')} title="Harley for sale" subtitle="$8000"/>
                <Listing image={require('../assets/triump.jpg')} title="Triump for sale" subtitle="$9000"/>
            </View>
        </Screen>
*/

    return (
        <Screen>
            <FlatList
                data = {listings}
                keyExtractor = { listing => listing.id.toString() }
                renderItem = { ({ item }) => 
                    <Listing 
                        title = {item.title}
                        subTitle = {item.description}
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
                        title: 'T4',
                        subtitle: 'D4',
                        image: require('../assets/mac-miller.jpg')
                    }]) }
                style = {styles.mainContainer}
            /> 
        </Screen>);
}

export default ListingsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    },
})