import { Alert, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';

const generateRandomNumberBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export const Game = ({userNum, onGameOver}) => {
  const initialGuess = generateRandomNumberBetween(minBoundary, maxBoundary, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver();
      Alert.alert('Game Over!', 'You won!', [{text: 'OK', style: 'cancel'}]);
    }
  }, [currentGuess, userNum, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (direction === 'lower' && currentGuess < userNum ||
        direction === 'greater' && currentGuess > userNum
    ) {
      return Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newNum = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newNum);
  }

  return (
      <View style={styles.inputContainer}>
        <Title>App's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>HIGHER OR LOWER?</Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        +
                    </PrimaryButton>
                </View>
            </View>
    {/*<View>/!*LOG ROUNDS*!/</View>*/}
    </View>
  )};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 24,
    },
    btnContainer: {
        flexDirection: 'row',
    }
});
