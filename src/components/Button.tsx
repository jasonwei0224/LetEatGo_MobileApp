import React from "react"; 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Button(props){
    return(
        <TouchableOpacity
        style={styles.button}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  });
  