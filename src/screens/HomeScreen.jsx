import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, Animated, Alert } from "react-native";
import axios from "axios";
import Header from "../components/Header.jsx";

import DetailRestaurantScreen from "./DetailRestaurantScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {connect} from 'react-redux'
import {onUserLogin, onFetchRestaurant} from '../redux'


const Stack = createStackNavigator(); 
const BOTTOM_HEIGHT = 500
const Home_main = ({navigation, route} ) => {
  const [data, setData] = useState("weg");
  const offset = useRef(new Animated.Value(0)).current;
  
  console.log("!!!!!!", route.params.test)

  return (
    
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header style = {{flex : 1}}mainHeaderText="" subHeaderText="HOT DEAL" props = {offset}></Header>
        
        <FlatList
        style = {{flex : 1}}
        data={route.params.test}

        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <TouchableOpacity 
            key = {item.name}
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



const _HomeScreen = (props) => {
  const {userReducer, onUserLogin, onFetchRestaurant} = props;
  const {user, products} = userReducer;
  useEffect(()=> {
    onFetchRestaurant()
  }, [])
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        {products!=undefined  ?
            <Stack.Screen
              name = "Home_main"
              component = {Home_main}
              options={{ headerShown: false }}
              initialParams = {{test : products['data']}}>
              
            </Stack.Screen> 
          :
          
          
            <Stack.Screen
              name = "Home_main"
              component = {Home_main}
              options={{ headerShown: false }}>
              
            </Stack.Screen> 
          }
        
        <Stack.Screen
          name = "Detail_restaurant"
          component = {DetailRestaurantScreen}
          options={{ headerShown: false }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const mapStateToProps = (state) => ({
  userReducer : state.userReducer
})

const HomeScreen = connect(mapStateToProps, {onUserLogin, onFetchRestaurant})(
  _HomeScreen
)


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
