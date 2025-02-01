import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';







function CancelScreen(props) {

const cancel = useSelector((state)=>state.complain.cancelData)


console.log("This is Cancell Data",cancel)



    return (
        <ScrollView>
          
       
               { cancel.compDetails.length > 0 ?   cancel.compDetails.map((item,index)=>(
                          
                           <View style={styles.tableCont} key={index} >
                           <View>
                               <TouchableOpacity>
                                   <Text style={styles.listText}>Ticket Id : {item.tcId } </Text>
                                   <Text style={styles.listText}>Machine Id : {item.machineId} </Text>
                                   <Text style={styles.listText}>Company Name : {item.companyName}</Text>
                               </TouchableOpacity>
                           </View>
               
                           <View>
                               <Text style={styles.listTextDate}>Complain Date : {item.createOnDateTime ? moment(item.createOnDateTime).format('YYYY-MM-DD') :"N/A"}</Text>
                           </View>
                       </View>
                      
                       )):''}
                 
              </ScrollView>
    );
}

export default CancelScreen;


const styles = StyleSheet.create({
    tableCont: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor:'#E1354B'
    },
    listText :{
        fontSize:18,
        fontWeight:'700',
        color:'white'

    },
    listTextDate:{
        marginTop:20,
        fontSize:20,
        fontWeight:'900',
        color:'white'
    }
})