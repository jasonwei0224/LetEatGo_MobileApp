import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const HEADER_HEIGHT = 150;


const Header = ({props}) => {
  const insets = useSafeAreaInsets();
  const headerHeights = props.interpolate({
    inputRange : [0, 50  + insets.top],
    outputRange : [HEADER_HEIGHT + insets.top, insets.top + 44], //44
    extrapolate : 'clamp'
  })
  return (
    <Animated.View
      style = {{
        position : 'relative',
        top:0,
        left:0,
        right:0,
        zIndex : 10,
        height: headerHeights,
        backgroundColor:'#F2994A'
      }}
    ></Animated.View>
  )
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  inner_container1: {
    flex: 5,
    backgroundColor: "#F2994A",
    width: "100%",
  },
  inner_container2: {
    flex: 1,
    backgroundColor: "#D07422",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subHeaderText : {
    color : "white",
    fontWeight:"bold",
    fontSize:20
  
  }
});
