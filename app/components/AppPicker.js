
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import Screen from './Screen';
import defaultStyles from '../config/Styles';
import PickerItem from './PickerItem';


function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {

    const [modalVisible, setModalVisible] = useState(false);


    // Check how I am applying the style on AppText as a property called textStyle, since this is the property
    // where that component receives custom styles. 
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style={styles.container}>
                    {icon && 
                        (<MaterialCommunityIcons 
                            name={icon} 
                            size={22} 
                            color={defaultStyles.Colors.medium} 
                            styles={styles.icon}
                        />)}
                    
                    <AppText textStyle={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>

                    <MaterialCommunityIcons 
                        name='chevron-down'
                        size={26} 
                        color={defaultStyles.Colors.medium}/>
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title='Close' onPress={ () => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor = {(item) => item.value.toString()}
                        renderItem = {({ item }) =>
                            <PickerItem
                                label = {item.label}
                                onPress= {() => {
                                    console.log('pressed item: ' + item);
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }
                            }/>}
                    />
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;


const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.Colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15, 
        marginVertical: 10
    },
    text: {
        flex: 1,
    }
})