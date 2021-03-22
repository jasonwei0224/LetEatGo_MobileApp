import React from "react"; 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Button(props){
    return(
        <TouchableOpacity
            onPress = {props.onClickEvent} 
            style={styles.button}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#F2994A",
        padding: 10
      },
  });
  