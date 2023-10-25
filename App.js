import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello World</Text>
      </View>
      <Text style={styles.dummyText}>Another Text Component</Text>
      <Button title="Tap Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  dummyText: {
    borderColor: 'red',
    borderWidth: 2,
    margin: 16,
    padding: 16
  }
});
