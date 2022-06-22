import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <AppText textStyle={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
}

export default PickerItem;

const styles = StyleSheet.create({
     text: {
         padding: 10
     }
})
