import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText'
import Colors from '../config/Colors';
import SectionHeader from '../components/SectionHeader';
import Icon from '../components/Icon';

function MyAccountScreen(props) {
    return (
        <Screen > 
            <View style={styles.userDetailsContainer}>
                <ListItem title = 'Gyan Garcia Avila'
                            subTitle = 'gyangarcia80@gmail.com'
                            image = {require('../assets/gyan.jpg')} />  
            </View>

            <SectionHeader iconName="format-list-bulleted" text="My Listings" iconBackgroundColor={Colors.primary}/>
            <SectionHeader iconName="email" text="My Messages" iconBackgroundColor={Colors.secondary}/>
            
            <View style={styles.logoutContainer}>
                <SectionHeader iconName="logout" text="Log Out" iconBackgroundColor={Colors.yellow}/>
            </View>

        </Screen>
    );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
    userDetailsContainer:{
        backgroundColor: Colors.white,
        marginVertical: 20
    },
    logoutContainer:{
        marginTop: 30
    }
})