import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StartGame } from "./screens/StartGame";
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { Game } from './screens/Game';
import Colors from './util/colors';
import { GameOver } from './screens/GameOver';
import { useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNum, setUserNum] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.preventAutoHideAsync();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const numberConfirmedHandler = (selectedNumber) => {
    setUserNum(selectedNumber);
    setGameOver(false);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  }

  let screen = <StartGame onConfirm={numberConfirmedHandler}/>;
  if (userNum) {
    screen = <Game
        userNum={userNum}
        onGameOver={gameOverHandler}
    />
  }

  if (gameOver && userNum) {
    screen = <GameOver/>
  }

  return (
    <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootContainer}
    >
        <ImageBackground
            source={require('./assets/img/background.png')}
            style={styles.rootContainer}
            imageStyle={styles.imgBackground}
            resizeMode={'cover'}
        >
          <SafeAreaView style={styles.rootContainer}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  imgBackground: {
    opacity: 0.3
  }
});
