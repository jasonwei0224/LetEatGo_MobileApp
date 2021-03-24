import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Logo from "../assets/image/LetEatGoLogo.png";
import { TextInput } from "react-native-gesture-handler";

export default function UserScreen({ navigation }) {
  const handleSubmitPress = () => {
    alert("Now Come to the main!");
    navigation.replace("TabNavigatorRoutes");
  };
  const goToRegistration = () => {
    // alert("Now Come to the main!");
    navigation.push("RegisterScreen");
  };
  return (
    <View style={styles.container}>
      {/* <Text> This is a User Screen</Text> */}
      <Image source={Logo} style={styles.logo}></Image>

      <View style = {styles.container2}>
        {/* <Text> Let Eat Go </Text> */}
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput placeholder="Password" style={styles.input}></TextInput>
        <TouchableOpacity onPress={handleSubmitPress} style={styles.button}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToRegistration} style={styles.signUpBtn}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom:10,
    padding:10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 5,
    backgroundColor: "#F2994A",
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#F2994A",
    padding: 10,
  },
  signUpBtn: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#F2994A",
    padding: 10,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    height: "40%",
    resizeMode: "center"
  },
  container2 : {
    width:"70%"
  }
});
