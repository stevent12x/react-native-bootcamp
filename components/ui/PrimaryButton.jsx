import { StyleSheet, View, Pressable, Text } from "react-native";
import Colors from '../../util/colors';

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.btnPressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary800 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 2,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    padding: 8,
    paddingHorizontal: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  btnText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnPressed: {
    opacity: 0.75,
  },
});
