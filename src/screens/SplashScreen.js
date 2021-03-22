import React, {useState, useEffect} from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet, 
    Image
} from 'react-native';

import AsyncStorage from "@react-native-community/async-storage"

const SplashScreen = ({navigation})=> {
    const [animating, setAnimating] = useState(true);


    useEffect(()=> {
        setTimeout(()=> {
            setAnimating(false);

            AsyncStorage.getItem('user_id').then((value)=> {
                navigation.replace(
                    value===null?'Auth':'TabNavigatorRoutes'
                )
            })
        },5000);
    }, []);

    return (
        <View style = {styles.container}>
            <Image
                Source = {require('../../image/test.jpg')}
                style = {{width:'90%', resizeMode :"contain", margin : 30}}>
            </Image>
            <ActivityIndicator
                animating = {animating}
                color = "#FFFFFF"
                size = "large"
                style = {styles.activityIndicator}>
            
            </ActivityIndicator>


        </View>
    )

}
export default SplashScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent:'center',
        backgroundColor: "#307ecc"
    },
    ActivityIndicator: {
        alignItems:'center',
        height:80
    }

})