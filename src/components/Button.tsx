import React from "react"; 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Button(){
    return(
        <TouchableOpacity
        style={styles.button}>
            <Text>Press here</Text>
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
  