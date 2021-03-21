
import React from "react"; 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function FormTextInput(props){
    return(
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
            />
        
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: "80%",
      },
  });
  