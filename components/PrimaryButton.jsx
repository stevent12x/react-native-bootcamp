import { StyleSheet, View, Pressable, Text } from "react-native";

export const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log(`${children} button pressed`);
  };
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.btnPressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#280213" }}
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
    backgroundColor: "#521532",
    padding: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  btnPressed: {
    opacity: 0.75,
  },
});
