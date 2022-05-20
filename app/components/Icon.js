import React from 'react';
import {View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import Colors from '../config/Colors';

function Icon({name, size=40, backgroundColor='#000', iconColor='#fff'}) {

    console.log(name)
    return (
        <View style={{backgroundColor: backgroundColor, 
                      padding: 10, 
                      borderRadius: size / 2, 
                      width: size, 
                      height: size, 
                      justifyContent: 'center',
                      alignItems: 'center'}}>
            <MaterialCommunityIcons name={name} size={size/2} color={iconColor}/>
        </View>
    );
}

export default Icon;
