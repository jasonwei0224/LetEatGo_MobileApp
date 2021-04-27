import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";

const DATA = [
  //   { restaurantName: "Sweet Memory", date: "2021-Mar-31", amount: "0.5" },
  //   { restaurantName: "Sweet", date: "2021-Mar-32", amount: "0.6" },
];
const Item = ({ name, date, amount }) => {
  return (
    <View style={styles.item}>
      <View style={styles.col1}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.col2}>
        <Text style={styles.amount}>${amount}</Text>
      </View>
    </View>
  );
};
const History = () => {
  const renderItem = ({ item }) => {
    return (
      <Item name={item.restaurantName} date={item.date} amount={item.amount} />
    );
  };
  if (DATA === undefined || DATA.length == 0) {
    return (
      <View style={styles.container}>
        <View style={styles.noRecordHeader}>
          <Header mainHeaderText="" subHeaderText="Welcome"></Header>
        </View>
        <View style={styles.container}>
          <Text>There is no history</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header mainHeaderText="Test" subHeaderText="test2"></Header>
        </View>
        <View style={styles.body}>
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </View>
    );
  }
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  noRecordHeader: {
    flex: 0.5,
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
