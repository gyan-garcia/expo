import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../config/Colors.js';

function ListItemSeparator() {
    return (
        <View style = { styles.separator }/>
    );
}

export default ListItemSeparator;

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1, 
        backgroundColor: Colors.light
    }
})