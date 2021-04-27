import React, {useState} from "react";
import { StyleSheet,Dimensions, ScrollView, View, Text, Image } from "react-native";



const {width} = Dimensions.get("window");
const height = width * 0.6;

const ImageSlider = (props) => {

    const [pictures, setPictures] = useState(props.data);
    const [active, setActive] = useState(0);
    
    const change_num = ({nativeEvent})=> {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if(slide !==active) {
        setActive(slide)
      }
    }
    return (
        <View style = {styles.container}>
            <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll = {change_num}
                showsHorizontalScrollIndicator = {false}
                style = {{width, height}}>
                {
                pictures.map((item, index)=> (
                    <Image 
                    key = {item}
                    source = {{uri : item}}
                    style = {{width, height, resizeMode : 'cover'}}></Image>
                ))
                }
            </ScrollView>
            <View style = {{flexDirection : 'row', position : 'absolute', top: 0, alignSelf : 'center'}}>
                {
                pictures.map((i, k)=> (
                    <Text key  = {k} style = {k==active? styles.pagingActiveText: styles.pagingText}>⬤</Text>
                ))  
                }
                
            </View>
        </View>
        

    )    
}

export default ImageSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    pagingText : {
        color : '#D07422',
        margin : 3,
        fontSize : (width/40)
      },
      pagingActiveText : {
        color : 'white',
        margin : 3,
        fontSize : (width/40)
      }, 
    
})

