import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export const GoalInput = (props) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (textInput) => {
    setGoalInput(textInput);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalInput);
    resetGoalInput();
  };

  const cancelGoalHandler = () => {
    props.onCancel();
    resetGoalInput();
  };

  const resetGoalInput = () => {
    setGoalInput('');
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/imgs/goal.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={cancelGoalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#b18080"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
    width: '30%'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  imageStyle: {
    height: 100,
    margin: 20,
    width: 100
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#311b6b',
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  textInput: {
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
    borderRadius: 6,
    borderWidth: 1,
    color: '#574d7c',
    padding: 16,
    width: '100%'
  }
});
