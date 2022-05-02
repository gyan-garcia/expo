
import { StyleSheet, Platform } from 'react-native';

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
                fontFamily: "Avenir"
            }, 
        })
    }, 
});

export default styles;