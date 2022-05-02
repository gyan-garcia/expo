import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mac-miller.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D1',
        image: require('../assets/mac-miller.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D1',
        image: require('../assets/mac-miller.jpg')
    }
];

function MessagesScreen(props) {

    //console.log("log >>>>" + Constants);

    return (
        // SafeAreView only works for iPhone, for Android we need to add platform specific code. 

        <Screen>
            <FlatList
                data = {messages}
                keyExtractor = { message => message.id.toString() }
                renderItem = { ({ item }) => 
                    <ListItem 
                        title = {item.title}
                        subTitle = {item.description}
                        image = { item.image } /> } /> 
        </Screen>);
}

const styles = StyleSheet.create({
    screen: {
    }
})

export default MessagesScreen;