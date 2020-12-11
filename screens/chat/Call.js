import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, BackHandler, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { Navigation } from "react-native-navigation";

const Call = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const back = () => {
        Navigation.dismissModal(componentId);
        return true;
    };

    useEffect(() => {
        console.log(props.updatedata)
        BackHandler.addEventListener("hardwareBackPress", back);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);


    return (
        <View style={{ flex: 1 }}>

            <View style={styles.callcontainer}>
                <Text style={styles.callname}>Ralph edwards</Text>
                <Text style={styles.calltime}>02:28</Text>
            </View>

            <View style={styles.progressLayer}>
                <View
                    style={styles.circlelayer}>
                    <View style={styles.circlelayer1}>
                        <Image source={require('../../assets/user1.png')} style={styles.image} />
                    </View>
                </View>
            </View>

            <View style={styles.buttoncontainer}>
                <View
                    style={styles.button}>
                    <Icon name={'phone-alt'} color={'red'} size={30} />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {

    },
    callcontainer: {
        justifyContent: 'space-between', alignItems: 'center', padding: 10
    },
    callname: {
        fontFamily: "Lato-Bold", color: "#fff", fontSize: 24
    },
    calltime: {
        fontFamily: "Lato-Regular", color: "#fff", fontSize: 18, marginVertical: 10,
    },

    circlelayer: {
        borderRadius: 300 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 300,
        backgroundColor: '#2B365C'
    },
    circlelayer1: {
        borderRadius: 250 / 2,
        alignItems: "center",
        justifyContent: 'center',
        height: 250,
        width: 250,
        backgroundColor: '#555D79',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    progressLayer: {
        marginVertical: 30,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },

    buttoncontainer: {
        marginVertical: 40, justifyContent: 'center', alignItems: 'center'
    },
    button: {
        width: 80, height: 80, borderRadius: 80, justifyContent: "center",
        alignItems: 'center', backgroundColor: "#fff"
    }

});


export default Call;