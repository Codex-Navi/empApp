import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { empLogin } from '../Redux/empLogin';



  


function LoginScreen(props) {
    const login=useSelector((state)=>state.login)

    const disptach=useDispatch()

  const [userEmail,setUserEmail]=useState('')
  const [userPassword,setUserPassword]=useState('')
  const [error,setError]=useState('')
  const [errorShow,setErrorShow]=useState(false)


  function handleSubmit(){
     
    disptach(empLogin({email:userEmail,password:userPassword}))
  }


useEffect(()=>{
    if(login?.logindata?.status == 'success'){
        props.navigation.navigate("Drawer")
    }
},[login?.logindata?.status])




 



    return (
       <SafeAreaView>
            <View style={{padding:'100px',height:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/Ithelpdesk-logo.png')} style={{marginTop:100,height:200,width:300}}/>
            </View>
            <View style={{height:'50%',display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#045f83'}}>
                <View style={styles.formwrap}>
                  <View>
                     <Text style={styles.formlabel}>User Email :</Text>
                     <TextInput placeholder='Enter User Email' style={styles.forminput} onChangeText={(text)=> setUserEmail(text)}  />
                  </View>

                  <View style={{marginTop:20}}>
                     <Text style={styles.formlabel}>Password :</Text>
                     <TextInput placeholder='Enter User Password' style={styles.forminput} onChangeText={(text)=>setUserPassword(text)} />
                     {errorShow && <Text style={{color:'yellow',marginTop:10,fontWeight:'700'}}>{error}</Text>}
                  </View>
                   <TouchableHighlight onPress={handleSubmit} style={styles.formbtn}><Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'900'}}>Log In</Text></TouchableHighlight>
                  </View>

            </View>
       </SafeAreaView>
    );
}

export default LoginScreen;


const styles=StyleSheet.create({
    formwrap:{
      width:350,
      marginTop:20
    },
    topsection:{
        flex:1,
  
    },
    bottomsection:{
        flex:1,
      
    },
    forminput:{
         backgroundColor:"#d9d9d9",
         borderRadius:10,
         paddingLeft:10
    },
    formlabel:{
        color:'white',
        fontSize:20,
        fontWeight:'500',
        marginBottom:5,
        fontFamily:'Poppins-Medium',
        marginLeft:5
    },
    formbtn:{
        marginTop:20,
        borderRadius:20,
        backgroundColor:'#F8A912',
        paddingTop:10,
        paddingBottom:10,
        cursor:'pointer'
    }
})