import React, { useState, useEffect } from 'react';
import {
    View, StyleSheet, Text, TextInput, FlatList,
    BackHandler, TouchableOpacity, Animated, Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';


const AdsPrice = (props) => {

    const componentId = props.componentId;

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", back);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const back = () => {
        Navigation.dismissOverlay(componentId);
        return true;
    };


    const [alertY, setalertY] = useState(new Animated.Value(0))
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");
    const [Error, setError] = useState("");

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
        extrapolate: 'clamp',
    });

    const _changePrice = (text) => {
        setPrice(text)
        props.PriceProp(text)
    }

    const _changeDiscount = (text) => {
        setDiscount(text)
        props.Discountprop(text)
    }

    const _done = () => {
        if (Price == "") {
            // console.log('empty ha')
            setError("please Enter Price")
        } else if (Discount == "") {
            setError("please Enter Descount Price")
        }
        else {
            _closeAlert()
            console.log('nh hai')
        }

    }

    return (
        <Animated.View style={{
            ...styles.container,
            height: 260,
            maxHeight: 260,
            padding: 20,
            marginTop: 120,
            marginHorizontal: 10,
            backgroundColor: '#fff',
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>

            <View style={styles.alertDetails}>

                <View style={{
                    borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>
                    <TextInput
                        placeholder={'Enter Price'}
                        onChangeText={(text) => _changePrice(text)}
                        keyboardType={'number-pad'}
                        style={styles.textInput} />
                </View>

                <View style={{ marginVertical: 5 }}>
                    {Error == "" ? <Text></Text> : <Text style={{ textAlign: "left", color: "red", fontSize: 14 }}>{Error}</Text>}
                </View>

                <View style={{
                    marginVertical: 10,
                    borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>
                    <TextInput
                        placeholder={'Enter Discount'}
                        keyboardType={'number-pad'}
                        onChangeText={(text) => _changeDiscount(text)}
                        style={styles.textInput} />
                </View>

                <TouchableOpacity onPress={_done} style={{
                    padding: 15, width: 330,
                    marginVertical: 15, backgroundColor: colors.primary,
                    borderRadius: 10,
                    height: 55, justifyContent: 'center', alignItems: 'center',
                    elevation: 5
                }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lato-Regular" }}>Done</Text>
                </TouchableOpacity>



            </View>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
    txt: {
        fontSize: 16,
        marginLeft: 20,
        color: colors.primary,
        textAlign: 'center',
        fontFamily: 'Lato-Regular'

    },
    icon: {
        alignSelf: 'center'
    },
    alertDetails: {
        margin: 10,
        // marginVertical: 0,
        // width:'100%',
        // flexDirection: 'row',
        // justifyContent   : 'space-between',
        alignItems: 'center',
    },
});


export default AdsPrice;
