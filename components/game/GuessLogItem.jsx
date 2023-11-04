import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

export const GuessLogItem = ({roundNum, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNum}</Text>
      <Text>App's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.75,
    shadowRadius: 4
  },
  itemText: {
    fontFamily: 'open-sans'
  }
})