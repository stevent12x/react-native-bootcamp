import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StartGame } from "./screens/StartGame";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Game } from './screens/Game';
import Colors from './util/colors';

export default function App() {
  const [number, setNumber] = useState(null);

  const numberConfirmedHandler = (selectedNumber) => {
    setNumber(selectedNumber);
    }

  let screen = <StartGame onConfirm={numberConfirmedHandler}/>;
  if (number) {
    screen = <Game />
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
