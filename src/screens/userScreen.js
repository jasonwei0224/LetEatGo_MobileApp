import React from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FormTextInput from "../components/FormTextInput";
import Button from '../components/Button'
import { StatusBar } from "expo-status-bar";

export default function UserScreen({navigation}) {

  const handleSubmitPress = () => {
    alert("Now Come to the main!")    
    navigation.replace('TabNavigatorRoutes');
    
  }
  return (
      <View style={styles.container}>
        <Text> This is a User Screen</Text>
        <View>
          <Text> Let Eat Go </Text>
          <FormTextInput placeholder="Email"></FormTextInput>
          <FormTextInput placeholder="Password"></FormTextInput>
          <Button text="Log In" onClickEvent = {handleSubmitPress}></Button>
          <StatusBar style="auto" />
        </View>
          
      </View>
  )
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
