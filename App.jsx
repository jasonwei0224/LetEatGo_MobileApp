import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SplashScreen from "./src/screens/SplashScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigatorRoutes from "./src/screens/TabNavigatorRoutes.jsx";
import UserScreen from "./src/screens/userScreen.jsx";
import RegisterScreen from "./src/screens/RegisterScreen.jsx";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="UserScreen">
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
        // options={{
        //   title: "Register", //Set Header Title
        //   headerStyle: {
        //     backgroundColor: "#307ecc", //Set Header color
        //   },
        //   headerTintColor: "#fff", //Set Header text color
        //   headerTitleStyle: {
        //     fontWeight: "bold", //Set Header text style
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }} forceInset={{ top: 'always' }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="TabNavigatorRoutes"
          component={TabNavigatorRoutes}
          options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
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
