import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getBoundByRegion } from "../getBoundaryByRegion";
const MapScreen = () => {
  let a = {
    longitude: 49.2827,
    latitude: 123.1207,
  };
  let region = getBoundByRegion(a);
  return (
    <View style={styles.container}>
      <Text> Hi this is a Map</Text>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 49.2827,
          longitude: -123.1207,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{ latitude: 49.2827, longitude: -123.1207 }}
          title={"JavaTpoint"}
          description={"Java Training Institute"}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  mapStyle: {
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
  },
});
