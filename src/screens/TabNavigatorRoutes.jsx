import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import Screens
import HomeScreen from "./HomeScreen.jsx";
import TestScreen from "./TestScreen.jsx";
import MapScreen from "./MapScreen.jsx";

const Tab = createBottomTabNavigator();

const TabNavigatorRoutes = (props) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Test" component={TestScreen}></Tab.Screen>
        <Tab.Screen name="Map" component={MapScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigatorRoutes;
