
//Not sure if to use the StatusBar from expo or from ReactNative
//import { StatusBar } from 'expo-status-bar';

import { 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
  StatusBar, 
  View,
  Dimensions } from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  // Dimensions (from react-native) does not detect changes on dimensions. (I don't think this 
  // matters for the travel app).
  // Note: Dimensions take as a parementer screen or window (I think). On Iphone both are teh same but on 
  // android window is slightly smaller than screen.
  console.log(Dimensions.get('screen'));

  // Use Dimensions updates itself so it detects the dimensions in both portrait and landscape.
  // Note: app.json orientation needs to be set to 'default' to support both orientation.
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const orientation = useDeviceOrientation();

  // Esta madre esta chida por que el style cambia inmediatamente cuando cambia la orientation.
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: orientation.landscape ? "100%" : "30%"
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
