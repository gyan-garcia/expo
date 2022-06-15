
import { StyleSheet, Platform } from 'react-native';

// This module is not used anymore. 

const styles = StyleSheet.create({
    // Note that Avenir only exist on ios (and web it seems), but not on android.
    text: {
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            },
            android: {
                fontFamily: "Roboto"
            },
            web: {
                fontFamily: "Helvetica"
            }, 
        })
    }, 
});

export default styles;