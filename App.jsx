import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import FormTextInput from "./src/components/FormTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Let Eat Go </Text>
      <FormTextInput placeholder="Email"></FormTextInput>
      <FormTextInput placeholder="Password"></FormTextInput>
      <Button text="Log In"></Button>
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
