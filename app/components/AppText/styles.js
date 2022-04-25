
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            },
            web: {
                fontSize: 25,
                fontFamily: "Curier"
            }, 
        })
    }, 
});

export default styles;