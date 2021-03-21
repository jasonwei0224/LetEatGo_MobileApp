import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import UserScreen from './src/screens/UserScreen'
// import TestScreen from './src/screens/TestScreen'


function UserScreen() {
  return (
    <View>
      <Text> This is a User Screen</Text>
    </View>
  )
}

function TestScreen() {
  return (
    <View>
      <Text> This is a test Screen</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name = "home" component = {UserScreen}></Tab.Screen>
      <Tab.Screen name = "User" component = {TestScreen}></Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
