import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';






function PospondScreen(props) {

    const postpond = useSelector((state)=>state.complain.postpondData)


    console.log("This is PostPond Data",postpond)


    return (
        <ScrollView>
       
                { postpond.compDetails.length > 0 ?   postpond.compDetails.map((item,index)=>(
                                         <View style={styles.tableCont} key={index}>
                                         <View>
                                             <TouchableOpacity>
                                                 <Text style={styles.listText}>Ticket Id : {item.TicketId} </Text>
                                                 <Text style={styles.listText}>Machine Id : {item.MachineId} </Text>
                                                 <Text style={styles.listText}>Company Name : {item.Companyname}</Text>
                                             </TouchableOpacity>
                                         </View>
                             
                                         <View>
                                             <Text style={styles.listTextDate}>Time & Date : {item.time}</Text>
                                         </View>
                                     </View>
                                     )):''}
                  
              </ScrollView>
    );
}

export default PospondScreen;

const styles = StyleSheet.create({
    tableCont: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor:'#BD4294'
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