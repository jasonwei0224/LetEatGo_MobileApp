import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header2 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container1}>
        <Text>{props.mainHeaderText}</Text>
      </View>
      
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  inner_container1: {
    flex: 3,
    backgroundColor: "#F2994A",
    width: "100%",
  }
});
