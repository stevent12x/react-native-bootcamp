import { StyleSheet, View, Text } from "react-native";

export const PrimaryButton = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
