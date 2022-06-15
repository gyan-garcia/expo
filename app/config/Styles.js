
import { Platform } from 'react-native'

import Colors from './Colors'

// Check how we are adding "Colors" to the stylesheet. So anywhere we import the
// default styles, will also have access to the Colors palet. 

export default{
    Colors,
    text: {
        color: Colors.dark,
        fontSize: 20, 
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        paddingLeft: 10
    }
}
