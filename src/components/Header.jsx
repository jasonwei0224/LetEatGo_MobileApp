import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.case1}>
        <Text>{props.mainHeaderText}</Text>
      </View>
      <View style={styles.case2}>
        <Text>{props.subHeaderText}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  case1: {
    flex: 5,
    backgroundColor: "#F2994A",
    width: "100%",
  },
  case2: {
    flex: 1,
    backgroundColor: "#D07422",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
