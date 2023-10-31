import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from 'react';
import Colors from '../util/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';

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
      <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>
              Enter A Number
            </InstructionText>
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
        </Card>
      </View>
  );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
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
    },
    btnContainer: {
        flex: 1,
    },
    confirmBtn: {},
});
