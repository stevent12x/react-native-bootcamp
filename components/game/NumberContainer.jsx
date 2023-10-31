import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

export const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: 36
    }
});