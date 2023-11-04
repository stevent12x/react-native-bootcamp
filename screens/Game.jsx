import { Alert, StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { GuessLogItem } from '../components/game/GuessLogItem';

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
  const initialGuess = generateRandomNumberBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNum, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds(previousGuessRounds => [newNum, ...previousGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length;

  return (
      <View style={styles.inputContainer}>
        <Title>App's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                  Higher or Lower?
                </InstructionText>
                <View style={styles.btnsContainer}>
                  <View style={styles.btnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                      <Ionicons name="md-remove" size={28} color="white" />
                    </PrimaryButton>
                  </View>
                  <View style={styles.btnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={28} color="white" />
                    </PrimaryButton>
                  </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
              <FlatList
                data={guessRounds}
                renderItem={(itemData) =>
                    <GuessLogItem
                      roundNum={guessRoundsListLength - itemData.index}
                      guess={itemData.item}>
                    </GuessLogItem>}
                keyExtractor={(item) => item}
              />
            </View>
    </View>
  )};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  btnsContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
