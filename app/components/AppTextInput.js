import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/Styles';

function AppTextInput({ icon, ...otherProps }) {

    // Note the conditional rendering on the Icon. It will only render if
    // the conditional property is provided.

    // Also, check how we are receiving otherProps, and then spreading it on the object
    // so the properties received are applied. I kind of like more receiving and applying
    // one property at the time. This is pretty useful when writing specialization of a 
    // component. Like in this case. 
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={22} color={defaultStyles.Colors.medium} styles={styles.icon}/>}
            <TextInput style = { defaultStyles.text } {...otherProps}/>
        </View>
    );
}

export default AppTextInput;

// For some reason I can not set the color of the input field. 
// placeholderTextColor, and backgroundColor work fine, but color only
// does not.

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.Colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15, 
        marginVertical: 10
    }
})