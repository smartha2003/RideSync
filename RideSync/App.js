import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import {login, connectAndQuery} from './Mongo';
// import {HomeComponent} from "./Homepage"

// login('bob', 'abc', 'r');
// connectAndQuery('bob', 'abc');





//connectAndQuery(); HOW TO DO OPERATIONS WITH MONGODB
export default function App() {
  // connectAndQuery('Bob', 'abc', 'd');
  // login('Bob', 'abc');
  return (

    <View style={styles.container}>
      <Text>Hello this is my application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
