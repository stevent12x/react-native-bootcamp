import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (textInput) => {
    setGoalInput(textInput);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      {
        id: Math.random().toString(),
        text: goalInput
      }
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goalList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50
  },
  goalItem: {
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    margin: 8,
    padding: 8
  },
  goalText: {
    color: 'white'
  },
  goalsContainer: {
    flex: 5
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: '70%'
  }
});
