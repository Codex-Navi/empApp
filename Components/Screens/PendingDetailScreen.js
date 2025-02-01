import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingalCompalain } from '../Redux/empComplain';
import { ActivityIndicator, Snackbar } from 'react-native-paper';
import { CancleComplain, setCancelData } from '../Redux/statusChange';



function PendingDetailScreen(props) {
    const cancelData = useSelector((state) => state.statuschange.cnacelData)
    const [modalVisible, setModalVisible] = useState(false);
    const [loader, setLoader] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState('')

    const { tcId, emId } = props.route.params

    const singalComplain = useSelector((state) => state.complain.singalComplainData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingalCompalain({ tcId: tcId, emId: emId }))
    }, [])







    function handleCancel() {

        console.log("Called cancel")
        setLoader(true)
        dispatch(CancleComplain({ status: 4, tcId: tcId }))

    }
    function handleContinue(){
        dispatch(CancleComplain({ status: 6, tcId: tcId })) 
    }

    useEffect(() => {

        if (cancelData?.status == 'success') {
            setSnackBarMessage("Update SuccessFully")
            setLoader(false)
            setOpenSnackBar(true)
            setTimeout(() => {
                setOpenSnackBar(false)
                 dispatch(setCancelData())
            }, 2000);

        }




    }, [cancelData?.status])


 




    return (
        <ScrollView style={styles.mainCont}>
            <View style={styles.userDetailsCard}>
                <Text style={styles.userDetailsCardText}>Machine Id : {singalComplain.machineId
                    ? singalComplain.machineId : "N/A"} </Text>
                <Text style={styles.userDetailsCardText}>Ticket Id : {singalComplain.tcId
                    ? singalComplain.tcId : "N/A"} </Text>
                <Text style={styles.userDetailsCardText}>Contect Person Name : {singalComplain.contactPersonName ? singalComplain.contactPersonName : "N/A"} </Text>
                <Text style={styles.userDetailsCardText}>Address : {singalComplain.address ? singalComplain.address : "N/A"}</Text>
                <Text style={styles.userDetailsCardText}>Land Mark : {singalComplain.landmark ? singalComplain.landmark : "N/A"}</Text>
                <Text style={styles.userDetailsCardText}>Company Name : {singalComplain.
                    companyName ? singalComplain.companyName : "N/A"} </Text>
                <Text style={styles.userDetailsCardText}>Contect No. : {singalComplain.contactPersonNumber ? singalComplain.contactPersonNumber : 'N/A'} </Text>
                <Text style={styles.userDetailsCardText}>Whatsapp No. : {singalComplain.
                    whatsappNumber ? singalComplain.whatsappNumber : "N/A"} </Text>
                <Text style={styles.userDetailsCardText}>Email : {singalComplain.emailID ? singalComplain.emailID : "N/A"}</Text>
            </View>

            <View style={styles.problamTextCont}>
                <Text style={styles.problamText}>Problem Facing</Text>
                <Text style={styles.problamPara}>{singalComplain.problemFacing ? singalComplain.problemFacing : 'N/A'}</Text>
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

            <Modal

                animationType="slide" // Options: 'slide', 'fade', 'none'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}

            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>Work Postponed Date</Text>

                        <View style={styles.modelinputwrap}>
                            <View style={styles.inputwrap}>
                                <TextInput style={styles.modelinput} />
                                <Text style={styles.inputtext}>Day</Text>
                            </View>

                            <View style={styles.inputwrap}>
                                <TextInput style={styles.modelinput} />
                                <Text style={styles.inputtext}>Month</Text>
                            </View>

                            <View style={styles.inputwrap}>
                                <TextInput style={styles.modelinput} />
                                <Text style={styles.inputtext}>Year</Text>
                            </View>


                        </View>

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

            <View style={styles.btnCont}>
                <TouchableHighlight style={styles.btn1}><Text style={styles.btnText} onPress={handleContinue}>CONTINUE</Text></TouchableHighlight>
                <TouchableHighlight style={styles.btn2} onPress={() => setModalVisible(true)}><Text style={styles.btnText}>POSTPOND</Text></TouchableHighlight>
                <TouchableHighlight style={styles.btn3}><Text style={styles.btnText} onPress={handleCancel}>CANCEL</Text></TouchableHighlight>
            </View>

            {loader && <ActivityIndicator style={styles.indicators} animating={true} size={100} />}

            <Modal

                animationType="slide" // Options: 'slide', 'fade', 'none'
                transparent={true}
                visible={openSnackBar}
                onRequestClose={() => {
                    setModalVisible(false);
                }}

            >
                <View style={styles.modalOverlay}>
                    <View style={styles.SnackModalView}>
                        <View >

                            <Text style={{ color: 'white', fontSize: 20 }}> {snackBarMessage}</Text>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
}

export default PendingDetailScreen;


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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    btn2: {
        backgroundColor: '#BD4294',
        padding: 20,
        borderRadius: 40,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,

    },
    btn3: {
        backgroundColor: '#E1354B',
        padding: 20,
        borderRadius: 40,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,

    },
    btnText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    openButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButton: {
        backgroundColor: '#34B948',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        backgroundColor: 'white',
        width: 350,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '800'
    },
    modelinputwrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    modelinput: {
        borderWidth: 2,
        borderColor: 'skyblue',
        width: 70,
        marginBottom: 10,
        borderRadius: 10

    },
    inputwrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputtext: {
        fontSize: 18,
        fontWeight: '700'
    },
    indicators: {
        position: 'absolute',
        top: '40%',
        left: '35%'
    },
    SnackModalView: {
        backgroundColor: 'green',
        width: 350,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },


});
