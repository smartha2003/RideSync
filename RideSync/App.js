import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const connectAndQuery = require('./mongodb');
//connectAndQuery(); HOW TO DO OPERATIONS WITH MONGODB
export default function App() {
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
