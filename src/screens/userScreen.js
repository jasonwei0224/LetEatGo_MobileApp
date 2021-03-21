import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserScreen() {
  return (

      <View style={styles.container}>
        <View style = {styles.header}></View>
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
  header: {
      flex:5,
      backgroundColor : "#F2994A"
  }
});
