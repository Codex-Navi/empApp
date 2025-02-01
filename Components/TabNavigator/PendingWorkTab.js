import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { fetchCompalain } from '../Redux/empComplain';
import { ActivityIndicator } from 'react-native-paper';
import moment from 'moment';


 




function PendingWorkTab(props) {

   const complain= useSelector((state)=>state.complain)
   const login=useSelector((state)=>state.login)


   

    return (
        <ScrollView>

         { complain.complaindata.length >0 ? complain.complaindata.map((item,index)=>(
             <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('PendingDetailScreen',{
                tcId:item.tcId,
                emId:login.logindata.data.epId
             })}>
            <View style={styles.tableCont} >
            <View>
                <TouchableOpacity>
                    <Text style={styles.listText}>Ticket Id : {item.tcId?item.tcId:"N/A" } </Text>
                    <Text style={styles.listText}>Machine Id : {item.machineId?item.machineId:"N/A"} </Text>
                    <Text style={styles.listText}>Company Name : {item.companyName ? item.companyName:"N/A"}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.listTextDate}>Complain Date : {item.createOnDateTime ? moment(item.createOnDateTime).format('YYYY-MM-DD') :"N/A"}</Text>
            </View>
        </View>
        </TouchableOpacity>
        ))
        : <ActivityIndicator style={styles.indicators} animating={true}  size={100} />
        
        } 

        </ScrollView>
    );
}

export default PendingWorkTab;

const styles = StyleSheet.create({
    tableCont: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor:'#045F83'
    },
    listText :{
        fontSize:18,
        fontWeight:'700',
        color:'white',
        textTransform:'uppercase'

    },
    listTextDate:{
        marginTop:20,
        fontSize:20,
        fontWeight:'900',
        color:'white'
    },
    indicators:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:200
    }
})