import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const data=[
    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },


    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },

    {
        TicketId:'ITHDSRV_00061',
        Companyname:'Navi Computers & Services',
        MachineId:'MAC_000234',
        time:'Today'
    },
]




function OngoingWorkTab(props) {
    return (
       <ScrollView>

        {    data.map((item,index)=>(
             <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('OutgingDetailScreen')}>
                    <View style={styles.tableCont} >
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
                </TouchableOpacity>
                ))}
           
       </ScrollView>
    );
}

export default OngoingWorkTab;


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
        color:'white'

    },
    listTextDate:{
        marginTop:20,
        fontSize:20,
        fontWeight:'900',
        color:'white'
    }
})