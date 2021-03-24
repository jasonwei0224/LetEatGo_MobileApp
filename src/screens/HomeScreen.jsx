import React from 'react';
import {FlatList, View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
    const dataSet = [
        {key: 1, name : "SWEET MEMORY", addr: "7835 13th Ave, Burnaby", desc : "#Brunch #Egg"},
        {key: 2, name : "Ahn and Chi", addr: "135 7th Ave, Vancouver", desc : "#Cafe # study"},
        {key: 3, name : "Milkcow Cafe", addr: "15325 110A, Surrey", desc : "#good # nice View"},
        {key: 4, name : "Hiel Cafe", addr: "110, North Van", desc : "#delicious #Food"},
        {key: 5, name : "Busan DAEJI", addr: "100 Cambie St, Vancouver", desc : "#very #damm"},
        {key: 6, name : "The Keg steak", addr: "Langley, Vancouver", desc : "#super #tired"}
    ]
    return (
        <View style={styles.container}>
            <View style = {styles.case1}><Text></Text></View>
            <View style = {styles.case2}><Text></Text></View>
            <View style = {styles.case3}>
                <FlatList 
                    data = {dataSet}
                    renderItem = {({item})=>
                        <View style = {styles.case4}>
                            <View style = {styles.imageWrapper}>
                                <Image
                                    source = {require('../../image/logo.png')}
                                    style = {styles.logo}>
                                </Image>
                            </View>
                       
                            <View style = {styles.case5}>
                                <Text style= {styles.name}>{item.name}</Text>
                                <Text style= {styles.addr}>{item.addr}</Text>
                                <Text style= {styles.desc}>{item.desc}</Text>
                            </View>
                           
                        </View>}
                    ></FlatList>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor : "white"
    },
    case1: {
        flex:5,
        backgroundColor : "#F2994A",
        width:"100%"
    },
    case2: {
        flex:1,
        backgroundColor : "#D07422",
        width:"100%"
    },
    case3: {
        flex:10,
        width : "100%"
    },
    case4 : {
        width: "100%",
        borderBottomWidth: 1,
        padding : 10,
        borderColor : 'gray',
        marginTop : 10,
        marginBottom : 10,
        flex : 1,
        flexDirection: 'row'
        
    },
    imageWrapper : {
        padding : 10
    },
    logo : {
        flex : 1,
        width: 100,
        height : 100,
        resizeMode: 'cover',
        marginLeft : 20,
        marginRight : 20
    },
    case5 : {
        flex : 2
    },
    name: {
        fontWeight: "bold",
        textAlign : "center",
        fontSize : 25,
        marginBottom : 20
    }, 
    addr : {

        fontSize : 13
    },
    desc : {
        fontSize : 15,
        color : "#F2994A",
        fontWeight: "bold"

    }

  });
  