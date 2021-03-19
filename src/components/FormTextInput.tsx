
import React from "react"; 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function FormTextInput(){
    return(
        <TextInput
        style={styles.input}
            />
        
    );
}
const styles = StyleSheet.create({
    input: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  });
  