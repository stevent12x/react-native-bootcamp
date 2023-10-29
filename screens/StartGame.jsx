import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { PrimaryButton } from "../components/PrimaryButton";
import { useState } from 'react';
import Colors from '../util/colors';

export const StartGame = ({onConfirm}) => {
  const [number, setNumber] = useState('');

  const inputNumberHandler = (input) => {
    setNumber(input);
  }

  const resetInputHandler = () => {
    setNumber('');
  }

  const confirmNumberHandler = () => {
    const input = parseInt(number);

    if (isNaN(input) || input <= 0 || input > 99) {
      return Alert.alert('' +
        'Invalid number',
        'Must be a number between 1 and 99',
        [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]
        );
    }

    onConfirm(input);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize={"none"}
        autoCorrect={false}
        keyboardType={"number-pad"}
        value={number}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: Colors.primary600,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  btnsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  btnContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  resetBtn: {},
  confirmBtn: {},
});
