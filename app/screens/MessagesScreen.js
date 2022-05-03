import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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
    // State functions for the function component

    const [messages, setMessages] = useState(initialMessages);  // <-- This returns an array. Postion 0 is the object, and position 1 is the method to upadte the object.
    const [refreshing, setRefreshing] = useState(false); // A bool state variable

    const handleDelete = message => {
        // Delete the message from the messages array.
        setMessages(messages.filter( m => m.id !== message.id));

        // Notify the server so the message is deleted from the backend
        //...
    };




    return (
        <Screen>
            <FlatList
                data = {messages}
                keyExtractor = { message => message.id.toString() }
                renderItem = { ({ item }) => 
                    <ListItem 
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
                onRefresh = { () => setMessages([    
                    {
                        id: 4, 
                        title: 'T4',
                        description: 'D4',
                        image: require('../assets/mac-miller.jpg')
                    }]) }
            /> 
        </Screen>);
}

const styles = StyleSheet.create({
    screen: {
    }
})

export default MessagesScreen;