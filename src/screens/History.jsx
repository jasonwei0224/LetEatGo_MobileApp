import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Header2 from "../components/Header2";

import {connect} from 'react-redux'
import {onUserLogin, onFetchRestaurant} from '../redux'

const DATA = [
  //   { restaurantName: "Sweet Memory", date: "2021-Mar-31", amount: "0.5" },
  //   { restaurantName: "Sweet", date: "2021-Mar-32", amount: "0.6" },
];
const Item = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.col1}>
        <Text style={styles.title}>{props.newid}</Text>
        <Text style={styles.date}>{props.newid}</Text>
      </View>
      <View style={styles.col2}>
        <Text style={styles.amount}>${props.newid}</Text>
      </View>
    </View>
  );
};
const _History = (props) => {

  const {userReducer, onUserLogin, onFetchRestaurant} = props;
  const {user, products} = userReducer;
  useEffect(()=> {
    onFetchRestaurant()
  }, [])
  // const renderItem = ({ item }) => {
  //   console.log(item)
  //   return (
  //     <Item name={item.name} date={item.newid} amount={item.phone} />
  //   );
  // };
  {console.log(products)}
  if (products == undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.noRecordHeader}>
          <Header2 mainHeaderText="Welcome!" subHeaderText="Sangwook"></Header2>
        </View>
        <View style={styles.container}>
          <Text>There is no history</Text>
          
        </View>



        <TouchableOpacity style = {styles.container}
        onPress = {
          () => onFetchRestaurant()
        }>
          <Text>Test</Text> 
        </TouchableOpacity>
        
        
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header2 mainHeaderText="TestWorking?" subHeaderText="test2"></Header2>
          

          <FlatList data={products['data']} 
          style = {{flex : 1}}
          renderItem={({item})=> (
            <TouchableOpacity 
             key = {item.name}>
              <View><Text>This is a data</Text></View>
              <View><Text>{item.name}</Text></View>
              
            </TouchableOpacity>
          )} />
        </View>
        <View style={styles.body}>
         
        </View>
      </View>
    );
  }
};



const mapStateToProps = (state) => ({
  userReducer : state.userReducer
})

const History = connect(mapStateToProps, {onUserLogin, onFetchRestaurant})(
  _History
)

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  noRecordHeader: {
    flex: 0.2,
    width: "100%",
  },
  headerView: {
    flex: 5,
    width: "100%",
  },
  body: {
    flex: 10,
    width: "100%",
  },
  item: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    marginVertical: 8,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  col2: {
    flex: 1,
    alignItems: "flex-end",
    // marginRight: 10,
    justifyContent: "center",
  },
  amount: {
    fontSize: 20,
  },
});


// {products!==undefined && <Text style = {{marginLeft : 20, marginRight: 20, fontSize:16, backgroundColor: 'red'}}>
// {JSON.stringify(products)}
// </Text>}