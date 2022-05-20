import React from 'react';
import { Image, Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Colors from '../config/Colors'
import AppText from './AppText'

// IconComponent has a diffent casing since is actually expecting a whole component. It could be an Icon, 
// but could be an image, or pretty much any react native component. This is PRETTY POWERFULL.

function ListItem({image, title, subTitle, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions = {renderRightActions} >
            <TouchableHighlight 
                onPress = { onPress }
                underlayColor = { Colors.itemPressLight }>
                <View style={styles.container}>
                    {IconComponent}
                    {/* Look how we are only rendiring the image only if the image is provided!! */}
                    {image && <Image style={styles.image} source={image} resizeMode="cover"/>}
                    <View style={styles.secondaryContainer}>
                        <AppText textStyle={styles.title}>{title}</AppText>
                        {/* Also Conditionally render subtitle*/}
                        {subTitle && <AppText textStyle={styles.subTitle}>{subTitle}</AppText>}
                    </View>  
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;

//You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        padding: 12,
        backgroundColor: Colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    secondaryContainer: {
        width: "100%",
        padding: 5,
        marginLeft: 10,
        justifyContent: "center"
    },
    title:{
        fontSize: 18,
        color: Colors.black,
        fontWeight: "500",
        margin: 2
    },
    subTitle:{
        fontSize: 18,
        color: Colors.medium,
        fontWeight: "400",
        margin: 2
    }
})