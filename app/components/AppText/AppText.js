import React from 'react';
import { Text } from 'react-native';

import styles from "./styles";

// This file implements a component that will render a different bit depending
// on the Platform is running on.

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

export default AppText;


