
import { View } from 'react-native';

export default function App() {

  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row", // main axis is horizontal cause we requested row (by default is column)
      justifyContent: "center", // always uses the main axis specified on the flexDirection.
      alignItems: "center", // Used to aling items along the secondary axis
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width:100,
        height:100,
      }}/>
      <View style={{
        backgroundColor: "gold",
        width:100,
        height:100,
        top: 20,
        left: 20,
        position: "absolute" // by default all positioning is relative in react native
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width:100,
        height:100,
      }}/>
    </View>
  );
}


