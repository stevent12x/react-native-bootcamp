import { StyleSheet, Text, View } from 'react-native';
import { Title } from '../components/Title';

export const Game = () => {
  return <View style={styles.container}>
    <Title>User's Guess</Title>
    {/*GUESS*/}
    <View>
      <Text>HIGHER OR LOWER</Text>
      {/*+-*/}
    </View>
    {/*<View>/!*LOG ROUNDS*!/</View>*/}
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  }
});
