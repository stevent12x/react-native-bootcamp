import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGame = () => {
  // const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({});
