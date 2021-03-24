import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Logo from "../assets/image/LetEatGoLogo.png";

export default function RegisterScreen() {
  const handleSubmitPress = () => {
    alert("Now Come to the main!");
    navigation.replace("TabNavigatorRoutes");
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}></Image>
      {/* <Text> This is a Register Screen</Text> */}
      <View style = {styles.container2}>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput placeholder="Password" style={styles.input}></TextInput>
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}></TextInput>
        <TouchableOpacity onPress={handleSubmitPress} style={styles.signUpBtn}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#ffffff",
    marginTop: 10,
    marginBottom:10,
    padding:10
  },
  signUpBtn: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#F2994A",
    padding: 10,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    height: "40%",
    resizeMode: "center",
  },
  container2 : {
    width:"70%"
  }
});
