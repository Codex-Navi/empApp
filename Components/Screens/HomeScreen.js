import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, MD3Color, Searchbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCancelCompalain, fetchCompalain, fetchCompletedCompalain, fetchPostpondCompalain } from '../Redux/empComplain';
import CookieManager from '@react-native-cookies/cookies';




function HomeScreen(props) {
    const login=useSelector((state)=>state.login)



    const dispatch=useDispatch()



    useEffect(()=>{
        
        dispatch(fetchCompalain({token:login.logindata.token,emId:login.logindata.data.epId}))
        dispatch(fetchPostpondCompalain({token:login.logindata.token,emId:login.logindata.data.epId}))
        dispatch(fetchCompletedCompalain({token:login.logindata.token,emId:login.logindata.data.epId}))
        dispatch(fetchCancelCompalain({token:login.logindata.token,emId:login.logindata.data.epId}))

        

    },[login?.logindata?.token])




    const [searchQuery, setSearchQuery] = useState('');
    const [selectedValue, setSelectedValue] = useState('');



    const handlePending = () => {
        props.navigation.navigate('TabNavigator')
    }

    const handlePospond = () => {
        props.navigation.navigate('Pospond')
    }


    const handleCompleted = () => {
        props.navigation.navigate('Complet')
    }

    const handleCanceled = () => {
        props.navigation.navigate('Cancel')
    }

   useEffect(()=>{
    console.log(`serach text,${searchQuery} Length ${searchQuery.length}`)
   },[searchQuery])


    return (
        <ScrollView>
        <SafeAreaView style={styles.homeMainCont}>
            <View style={styles.searchSection}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    mode='view'
                    icon="magnify"
                    style={styles.search}
                />


                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Search Option" />
                    <Picker.Item label="Ticket Id" value="ticketid" />
                    <Picker.Item label="Machine Id" value="machineid" />
                    <Picker.Item label="Company Name" value="companyname" />
                </Picker>



            </View>

           {searchQuery.length == 0 ? 
           <View>
                 <TouchableOpacity onPress={handlePending} style={styles.touchwrap}>
                <Image source={require('../../assets/icons/pending.png')} />
                <Text style={styles.touchwraptext}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePospond} style={styles.touchwrap2}>
                <Image source={require('../../assets/icons/postpond.png')} />
                <Text style={styles.touchwraptext}>Pospond</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCompleted} style={styles.touchwrap3}>
                <Image source={require('../../assets/icons/complet.png')} />
                <Text style={styles.touchwraptext}>Completed</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCanceled} style={styles.touchwrap4}>
                <Image source={require('../../assets/icons/cancelled.png')} />
                <Text style={styles.touchwraptext}>Cancelled</Text>
            </TouchableOpacity>
           </View>
           :
           <View>
            <Text>Search Items show</Text>
           </View>
           }

        </SafeAreaView>
        </ScrollView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    homeMainCont: {
        padding: 20
    },
    searchSection:{
        display:'flex',
        flexDirection:'row'
    },
    search:{
        width:"60%"
    },
    picker:{
        width:"40%",
      
    },
    touchwrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#FFA448',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10
    },

    touchwrap2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#BD4294',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 20,
        borderRadius: 10
    },

    touchwrap3: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#34B948',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10
    },

    touchwrap4: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#E1354B',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10
    },


    touchwraptext: {
        fontSize: 30,
        fontWeight: '900',
        color: 'white'
    }
})