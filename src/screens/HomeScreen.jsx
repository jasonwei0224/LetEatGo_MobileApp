import React, { useEffect, useState, useRef } from "react";
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, Animated, EdgeInsetsPropType } from "react-native";
import axios from "axios";
import Header from "../components/Header.jsx";

import DetailRestaurantScreen from "./DetailRestaurantScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {useSafeAreaInsets} from 'react-native-safe-area-context'

const Stack = createStackNavigator(); 
const BOTTOM_HEIGHT = 500
const Home_main = ({navigation, route}) => {
  const [data, setData] = useState("weg");
  const insets = useSafeAreaInsets();
  const offset = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    axios
      // .get("https://leg-backend.herokuapp.com/api/v1/restaurant")
      .get("http://192.168.1.101:8080/api/v1/restaurant/")
      .then((res) => {
        setData(res.data["data"]);
        console.log(offset)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header style = {{flex : 1}}mainHeaderText="" subHeaderText="HOT DEAL" props = {offset}></Header>
        <FlatList
        style = {{flex : 1}}
        data={data}

        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress = {()=>{navigation.navigate("Detail_restaurant", {
              item : item
          })}}>
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: item.mainPicture }}
                style={styles.logo}></Image>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.addr}>{item.address}</Text>
              <Text style={styles.desc}>{item.mainTitle}</Text>
            </View>
          </TouchableOpacity>
        )}></FlatList>
      </View>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home_main"
          component = {Home_main}
          options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen
          name = "Detail_restaurant"
          component = {DetailRestaurantScreen}
          options={{ headerShown: false }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerView: {
    flex: 5,
    width: "100%",
  }, 
  
  item: {
    width: "100%",
    borderBottomWidth: 1,
    padding: 10,
    borderColor: "lightgray",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
  },
  
  imageWrapper: {
    padding: 10,
  },
  logo: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginLeft: 20,
    marginRight: 20,
  },
  info: {
    flex: 2,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
  addr: {
    fontSize: 13,
  },
  desc: {
    fontSize: 15,
    color: "#F2994A",
    fontWeight: "bold",
  },
});
