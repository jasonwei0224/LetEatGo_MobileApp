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
                source = {require('../../image/logo.png')}
                style = {styles.logo}>
            </Image>
            <View style = {styles.case2}>
                <ActivityIndicator
                    animating = {animating}
                    color = "#F2994A"
                    size = "large"
                    style = {styles.activityIndicator}>
                
                </ActivityIndicator>
            </View>
            


        </View>
    )

}
export default SplashScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent:'center',
        flexDirection: "column"
    },
    case2 : {
        flex : 1,
        alignItems : 'center',
        justifyContent:'center'
    },
    ActivityIndicator: {
        alignItems:'center',
        height:80
    },logo: {
        display: "flex",
        alignItems: "center",
        width: "40%",
        height: "40%",
        resizeMode: "center",
        marginTop:100
      },

})