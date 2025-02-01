import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';






function CompletScreen(props) {

    const completed = useSelector((state)=>state.complain.completedData)


    console.log("This is Completed Data",completed)


    return (
       <ScrollView>
      
              { completed.compDetails.length > 0 ?   completed.compDetails.map((item,index)=>(
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

export default CompletScreen;


const styles = StyleSheet.create({
    tableCont: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor:'#34B948'
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