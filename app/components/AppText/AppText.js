import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../../config/Styles'

// This file implements a component that will render a different bit depending
// on the Platform is running on.

// Check how I am applying both styles.  The one defined by the parent (textStyle), and the one
// defined on this component (That is only used to defie the fontName).
function AppText({children, textStyle}) {
    return (
        <Text style={[defaultStyles.text, textStyle]}>{children}</Text>
    );
}

export default AppText;


