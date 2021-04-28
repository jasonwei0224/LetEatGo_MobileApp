import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image,Pressable, Dimensions,ScrollView, TouchableOpacity, Modal, Alert } from "react-native";


import Header2 from "../components/Header2.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import testQRCode from "../assets/image/testQRCode.png";

const {width} = Dimensions.get("window");
const height = width * 0.6;



const Detail_restaurant = ({navigation, route}) => {
    const [modal, setModal] = useState(false);
  
    const test = () => {
        
        setModal(!modal)
    }
    return (
      
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header2 mainHeaderText=""></Header2>
        </View>
        <View style = {styles.image_slider_wrapper}>
        
            <ImageSlider  
                data = {route.params.item.pictures} ></ImageSlider>

        </View>

        
        <View style = {styles.information}>
            
            <ScrollView style = {styles.scrollStyle}>
            
                <View style={styles.res_name}>
                    <Text style = {styles.detail_name}>{route.params.item.name}</Text>
                </View>
                
                <View style = {styles.table}>
                    <View style = {styles.tr}>
                        <Text style = {styles.tag}> Phone</Text>
                    </View>
                    <View style = {styles.tr2}>
                        <Text>{route.params.item.phone}</Text>
                    </View>
                </View>
                
                <View style = {styles.table}>
                    <View style = {styles.tr}>
                        <Text style = {styles.tag}>Address</Text>
                    </View>
                    <View style = {styles.tr2}>
                        <Text>{route.params.item.address}</Text>
                    </View>
                </View>
                
                <View style = {styles.table}>
                    <View style = {styles.tr}>
                        <Text style = {styles.tag}>Website</Text>
                    </View>
                    <View style = {styles.tr2}>
                        <Text>{route.params.item.website}</Text>
                    </View>
                </View>

                <View style = {styles.table}>
                    <View style = {styles.tr}>
                        <Text style = {styles.tag}>Email</Text>
                    </View>
                    <View style = {styles.tr2}>
                        <Text>{route.params.item.email}</Text>
                    </View>
                </View>
                
                <View style = {styles.btn_get_coupon}>
                    <TouchableOpacity style = {styles.coupon_button} onPress = {()=> setModal(true)}> 
                        <Text style = {styles.get_coupon_text}>GET COUPON</Text>
                    </TouchableOpacity>
                </View>
    
                <Modal
                    animationType = {"slide"}
                    transparent={false}
                    visible={modal}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                        setModal(false);
                }}>
    
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Image
                        source={testQRCode}
                        style={styles.qrCode}></Image>
                    <Text style = { styles.text2 }>
                        All Waffle Menus Discount 20% until 31.Nov.2020</Text>
                    <Pressable
                        onPress={() => setModal(!modal)}
                    >
                        <TouchableOpacity onPress={test}
                            style={styles.btn_confirm}>
                            <Text style= {styles.btn_confirm_text}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModal(!modal)} style={styles.btn_confirm} ><Text style= {styles.btn_confirm_text}>QUIT</Text></TouchableOpacity>
                    </Pressable>
                    </View>
                </View>
                    
                </Modal>
    
            </ScrollView>
        </View>
        
      </View>
    )
  }

  export default Detail_restaurant;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    }, 
    headerView: {
      flex: 1,
      width: "100%",
    },
    image_slider_wrapper: {
        flex: 3,
        width: "100%",
      },
    
    information : {
      flex : 5,
      width: "80%"
    },
    scrollStyle : {
        flex : 4,
    
      },
    qrCode: {
      flex: 1,
      width: 100,
      height: 50,
      resizeMode: "cover",
      marginLeft: 20,
      marginRight: 20,
    },
    
   
    detail_name : {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 25,
      marginBottom: 20,
    },
    table : {
      flex: 2,
      width: "100%",
      flexDirection  : 'row',
      marginBottom:10
    },
  
    btn_get_coupon : {
      flex: 1,
      justifyContent: 'center',
      width: "100%",
      marginTop:30,
      flexDirection  : 'row',
      alignItems: 'center',
      marginBottom:10,
    },
    btn_confirm : {
        width: 100,
        backgroundColor:"#F2994A",
        margin:10,
        padding:15,
        textAlign:"center",
        borderRadius:10
    },
    btn_confirm_text : {
        textAlign:"center",
        color : "white",
        fontWeight:"bold"
    },
    res_name : {
      flex: 2,
      
    },
    tr : {
      flex : 2,
    },
    tr2 : {
      flex : 4,
    },
    tag : {
        color : "gray"
    },
    coupon_button : {
      alignItems: 'center',
      width:200,
      height:50,
      backgroundColor: "#F2994A", 
      borderRadius: 20,
      
    },
    get_coupon_text: {
      textAlign:"center",
      fontSize:20,
      padding:10
      
    },
    text2 : {
      flex: 1,
      justifyContent : "center"
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      
    },
    modalView: {
      margin: 100,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:450
    },
  });