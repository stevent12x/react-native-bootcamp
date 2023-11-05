import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Title } from '../components/ui/Title';
import Colors from '../util/colors';
import { PrimaryButton } from '../components/ui/PrimaryButton';

export const GameOver = ({ roundsNum, userNum, onStartNewGame }) => {
  return <View style={styles.rootContainer}>
    <Title>Game Over!</Title>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/img/success.png')}
        style={styles.image}
      />
    </View>
    <View>
      <Text style={styles.summaryText}>App needed <Text style={styles.highlightText}>{roundsNum} </Text>
          rounds to guess the number
          <Text style={styles.highlightText}> {userNum}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>START New Game</PrimaryButton>
    </View>
  </View>;
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
    fontSize: 32
  }
});
