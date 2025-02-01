import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function SplashScreen(props) {

     useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate("LoginScreen")
        },3000)
     },[])

    return (
       <View>
         <ImageBackground source={require('../../assets/splash.jpg')} style={{height:"100%", width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
           <Image source={require('../../assets/Ithelpdesk-logo.png')} />
         </ImageBackground>
           
       </View>
    );
}

export default SplashScreen;

const styles=StyleSheet.create({
    mainCont:{
        flex:1
    },
    
})