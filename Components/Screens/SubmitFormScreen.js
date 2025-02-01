import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';

function SubmitFormScreen(props) {

    const [checked, setChecked] = useState('');


    return (
        <ScrollView style={styles.submitFormCont}>

            <View style={styles.inputwrap}>
                <Text style={styles.inputlabel}>Problem Found</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={styles.RaidioBtnWrp}>
                <Text style={styles.RadioBtnHeader}>Status</Text>

                <View style={styles.btnBox}>
                    <RadioButton
                        value="complet"
                        status={checked === 'complet' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('complet')}

                    />
                    <Text style={styles.radioText}>Completed</Text>
                </View>


                <View style={styles.btnBox}>
                    <RadioButton
                        value="postpond"
                        status={checked === 'postpond' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('postpond')}
                    />
                    <Text style={styles.radioText}>Postponed</Text>
                </View>


                <View style={styles.btnBox}>
                    <RadioButton
                        style={styles.radio}
                        value="cancel"
                        status={checked === 'cancel' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('cancel')}
                    />
                    <Text style={styles.radioText}>Cancelled</Text>
                </View>

            </View>


            <View style={styles.inputwrap2}>
                <Text style={styles.inputlabel}>Feedback By Support Team</Text>
                <TextInput style={styles.input} />
            </View>


            {/* <View style={styles.inputwrap3}>
                <Text style={styles.inputlabel}>Customer Feedback</Text>
                <TextInput style={styles.input} />
            </View>


            <View style={styles.inputwrap4}>
                <Text style={styles.rationglabel}>Customer Reviews</Text>

                <AirbnbRating
                 reviews={['Very Bad', 'Bad', 'Okay', 'Good', 'Great']}
                />

            </View> */}

            <View style={styles.btnWrp}>
                <TouchableHighlight style={styles.btn}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableHighlight>
            </View>

        </ScrollView>
    );
}

export default SubmitFormScreen;

const styles = StyleSheet.create({
    submitFormCont: {
        padding: 20
    },
    inputwrap: {},
    inputlabel: {
        fontSize: 20,
        color: '#045F83',
        fontWeight: '700'

    },
    input: {
        borderWidth: 2,
        borderColor: '#045F83',
        marginTop: 10
    },
    RaidioBtnWrp: {
        marginTop: 30
    },
    RadioBtnHeader: {
        fontSize: 20,
        color: '#045F83',
        fontWeight: '700'
    },
    btnBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },


    radioText: {
        fontSize: 16,
        fontWeight: '600'
    },
    btnWrp:{
        marginTop:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        backgroundColor:'#34B948',
        paddingTop:15,
        paddingBottom:15,
        width:150,
        borderRadius:40
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'900',
        color:'white',
        textTransform:'uppercase'
    },
    inputwrap2:{
        marginTop:20
    },

    inputwrap3:{
        marginTop:20
    },

    inputwrap4:{
        marginTop:20
    },
    rationglabel:{
        textAlign:'center',
        fontSize: 20,
        color: '#045F83',
        fontWeight: '700'
    }
    
})