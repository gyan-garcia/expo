
//Not sure if to use the StatusBar from expo or from ReactNative
//import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Platform, StatusBar } from 'react-native';

export default function App() {

  // Question, Why can't I define the function like  
  // handlePress = {() => console.log("Text Pressed")};
  // with the {} brakets
  const handlePress = () => console.log("Text Pressed");

  console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native - a really really long text I want to make this longer and see what happens</Text>
      <TouchableHighlight onPress={ () => console.log("Image Tapped")}>
        <Image 
          blurRadius={0}
          style={{ width:500, height:500 }}
          source={{ uri: "https://www.lookslikegooddesign.com/wp-content/uploads/2012/03/fc-6.jpeg" }} />
      </TouchableHighlight>
      <Button 
        color="orange" 
        title="Click Me" 
        onPress={ () => alert("So what up") }
      />

    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor:"pink"};

console.log('Statusbar.height: ', StatusBar.currentHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
