import { View, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

export const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
    );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: 36,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
})
