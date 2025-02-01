import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

function OutgingDetailScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);



    return (
        <ScrollView style={styles.mainCont}>
            <View style={styles.userDetailsCard}>
                <Text style={styles.userDetailsCardText}>Contect Person Name : {'Mukesh Kumar Tiwary'}</Text>
                <Text style={styles.userDetailsCardText}>Address : {'28 gope Bose lane near st. gospah school kolkata=700030'}</Text>
                <Text style={styles.userDetailsCardText}>Company Name : {'Navi Computer and Services'} </Text>
                <Text style={styles.userDetailsCardText}>Contect No. : {'+91 7004388895'} </Text>
                <Text style={styles.userDetailsCardText}>Whatsapp No. : {'+91 7004388895'} </Text>
                <Text style={styles.userDetailsCardText}>Email : {'MukeshKumarTiwary@gmail.com'}</Text>
            </View>

            <View style={styles.problamTextCont}>
                <Text style={styles.problamText}>Problem Facing</Text>
                <Text style={styles.problamPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View style={styles.imgCont}>
                <Text style={styles.imgHeadeing}>Image</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                >
                    <View style={[styles.box, { backgroundColor: '#ff6347' }]}>
                        <Text style={styles.boxText}>Box 1</Text>
                    </View>
                    <View style={[styles.box, { backgroundColor: '#1e90ff' }]}>
                        <Text style={styles.boxText}>Box 2</Text>
                    </View>
                    <View style={[styles.box, { backgroundColor: '#32cd32' }]}>
                        <Text style={styles.boxText}>Box 3</Text>
                    </View>
                    <View style={[styles.box, { backgroundColor: '#ffa500' }]}>
                        <Text style={styles.boxText}>Box 4</Text>
                    </View>
                </ScrollView>
            </View>

        

            <View style={styles.btnCont}>
                <TouchableHighlight onPress={()=>props.navigation.navigate('SubmitFormScreen')} style={styles.btn1}><Text style={styles.btnText}>Go To Submit Form</Text></TouchableHighlight>
               
            </View>



        </ScrollView>
    );
}

export default OutgingDetailScreen;


const styles = StyleSheet.create({
    mainCont: {
        padding: 20
    },
    userDetailsCard: {
        backgroundColor: '#0A97B0',
        padding: 20,
        borderRadius: 20
    },
    userDetailsCardText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10

    },
    problamTextCont: {
        marginTop: 20
    },
    imgCont: {
        marginTop: 20
    },
    imgHeadeing: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '700'
    },
    problamText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        textDecorationLine: 'underline',
        marginBottom: 10,

    },
    problamPara: {
        textAlign: 'justify',
        fontSize: 18,
        fontWeight: 20
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    box: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    boxText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnCont: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    btn1: {
        backgroundColor: '#34B948',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 40,

    },
   
    btnText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
   

});
