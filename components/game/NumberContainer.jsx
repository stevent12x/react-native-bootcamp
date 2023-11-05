import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../util/colors';

export const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      borderWidth: 4,
      borderColor: Colors.accent500,
      padding: deviceWidth < 380 ? 12 : 24,
      borderRadius: 8,
      margin: deviceWidth < 380 ? 12 : 24,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontFamily: 'open-sans-bold',
      color: Colors.accent500,
      fontSize: 36
    }
});