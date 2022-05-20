import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Colors from '../config/Colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

// This is the Official account page from the course (the one I build on the excersize is called MyAccountScreen)

const menuItems = [
    { 
        title: "My listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary
        }
    },
    { 
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary
        }
    }
]


function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title='Gyancarlo Garcia'
                    subTitle='gyangarcia80@gmail.com'
                    image={require('../assets/gyan.jpg')}/>
            </View>

            <View style={styles.container}>
                {/* We can use the title to unique identify the elements*/}
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent = {ListItemSeparator}
                    renderItem = {({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }/>
                    } 
                />
            </View>

            <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>

        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
   container:{
       marginVertical: 20
   },
   screen: {
       backgroundColor: Colors.light,
   }
})