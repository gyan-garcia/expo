import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import Colors from '../config/Colors';

function SectionHeader({iconName, text, iconBackgroundColor}) {

    console.log('iconBackgroundColor: ', iconBackgroundColor);

    return (
        <View style={styles.sectionHeader}>
            <View style={{backgroundColor: iconBackgroundColor, padding: 10, borderRadius: 35}}>
                <MaterialCommunityIcons name={iconName} size={30} color={Colors.white}/>
            </View>
            <AppText textStyle={styles.sectionHeaderText}> {text} </AppText>
        </View>
    );
}

export default SectionHeader;

const styles = StyleSheet.create({
    sectionHeader:{
        flexDirection: "row",
        width: "100%",
        padding: 12,
        backgroundColor: Colors.white,
        alignItems: "center"     
    },
    sectionHeaderText:{
        fontSize: 18,
        color: Colors.black,
        fontWeight: "600",
        margin: 10
    },
    iconContainer:{
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 35,
    }
})