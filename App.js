import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StartGame } from "./screens/StartGame";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
        colors={["#38031b","#ddb52f"]}
        style={styles.rootContainer}
    >
        <ImageBackground
            source={require('./assets/img/background.png')}
            style={styles.rootContainer}
            imageStyle={styles.imgBackground}
            resizeMode={'cover'}
        >
          <View>
            <StartGame />
          </View>
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
