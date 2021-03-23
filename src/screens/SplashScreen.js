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
        },50000);
    }, []);

    return (
        <View style = {styles.container}>
            <View style = {styles.case1}>
                <Image
                    source = {require('../../image/logo.png')}
                    style = {{width:'50%', backgroundColor:'red', margin : 30}}>
                </Image>
            </View>
            <View style = {styles.case2}>
                <ActivityIndicator
                    animating = {animating}
                    color = "#FFFFFF"
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
        flexDirection: "row"
    },
    case1 : {
        flex : 2,
        width : "100%",
        flexDirection: "row"
    },
    case2 : {
        flex : 1,
        alignItems : 'center',
        justifyContent:'center'
    },
    ActivityIndicator: {
        alignItems:'center',
        height:80
    }

})