import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';

const Radio = [
    {
        key: 'master',
        text: 'master',
        image: require('../../assets/p.png'),
        image_key: false,
    },
    {
        key: 'visa',
        text: 'visa',
        image: require('../../assets/visa.png'),
        image_key: false,
    },
    {
        key: 'paypal',
        text: 'paypal',
        image: require('../../assets/p.png'),
        image_key: false,
    },
];

const Checkout = (props) => {


    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const [abc, setAbc] = useState(Radio)
    const [value, setvalue] = useState(null);
    const [show, setshow] = useState(false);


    const onRadioPress = (res, index) => {
        setvalue(res.key)
        let newOne = abc;
        abc.map((v, k) => {
            if (k === index) {
                newOne[k].image_key = !v.image_key;
            } else {
                newOne[k].image_key = false;
            }
        })
        // newOne[index].image_key = !abc[index].image_key;
        setAbc(newOne)
    }


    return (
        <View style={styles.container}>

            {abc.map((res, index) => {
                { console.log(index) }
                return (
                    <View key={index}>
                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between',
                            padding: 20,
                            alignItems: "center", backgroundColor: "#fff"
                        }}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => onRadioPress(res, index)}>
                                {value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>

                            <View>
                                <Text style={styles.cardText}>{res.text}</Text>
                            </View>
                        </View>

                        { !res.image_key ? <Text></Text> : <Image source={res.image} />}

                    </View>
                )
            })}

            <View style={styles.bottomView}>
                <View>
                    <Text style={{fontSize:24,fontFamily:"Lato-Bold",color:colors.primary}}>$7.99</Text>
                </View>
                <View style={{width:120,alignItems:'center',backgroundColor:colors.primary,padding:15,borderRadius:10}}>
                    <Text style={{fontSize:18,color:'#fff',fontFamily:"Lato-Bold"}}>pay</Text>
                </View>

            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },

    bottomView: {

        width: '98%',
        height: 60,
        margin: 5,
        justifyContent: 'space-around',
        flexDirection:'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    cardText: {
        fontFamily: "Lato-Regular",
        fontSize: 20,
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: colors.secondary,
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },

})

export default Checkout;