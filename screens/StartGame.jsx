import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGame = () => {
  // const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize={"none"}
        autoCorrect={false}
        keyboardType={"number-pad"}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: "#72063c",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  btnsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  btnContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  resetBtn: {},
  confirmBtn: {},
});
