import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import FormTextInput from "./src/components/FormTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hi </Text>
      <FormTextInput></FormTextInput>
      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
