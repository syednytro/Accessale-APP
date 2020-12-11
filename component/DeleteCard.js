import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text, Switch,
    Dimensions, TouchableOpacity, Image, CheckBox, BackHandler
} from 'react-native';
import { colors } from '../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';

const { height, width } = Dimensions.get('window')
const ALERT_BOX_HEIGHT = height * 0.3;
const ALERT_BOX_WIDTH = width * 0.9;
const DeleteCard = (props) => {
    const componentId = props.componentId;


    useNavigationButtonPress(e => {
        if (e.buttonId === 'delete-id') {
            Navigation.pop(componentId)
        };
    }, componentId);

    const back = () => {
        Navigation.dismissOverlay('delete-id');
        return true;
    };

    useEffect(() => {
        console.log(props.updatedata)
        BackHandler.addEventListener("hardwareBackPress", back);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.overlay} />
            <View style={styles.alertBox}>
                <View style={styles.box}>
                    <Image source={require('../assets/mark.png')} />
                    {/* <Icon name={'mail'} /> */}
                </View>

                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Lato-Rgular',fontSize:16,}}>Are you sure ypu ant to delete this Card?</Text>
                </View>

                <View style={styles.textheading}>
                    <TouchableOpacity onPress={back} style={styles.Btn}>
                        <Text style={styles.boxtext}>Yes,Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btnupdate}>
                        <Text style={[styles.boxtext, { color: '#fff' }]}>No Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'black',
        opacity: 0.7,
        ...StyleSheet.absoluteFillObject
    },
    alertBox: {
        backgroundColor: '#fff',
        width: ALERT_BOX_WIDTH,
        height: ALERT_BOX_HEIGHT
    },
    boxBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxtext: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: colors.primary
    },

    box: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Btn: {
        width: '45%',
        borderRadius: 5,
        // backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    Btnupdate: {
        width: '40%',
        padding:10,
        borderRadius: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5
    },
    drawertoogle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderBottomColor: colors.greyMedium,
        borderTopColor: colors.greyMedium
    },
    discounttext: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: colors.grey,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey
    },
    textheading: {
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'space-around'
    },
    toogletext: {
        fontSize: 16,
        color: '#00a651',
        fontFamily: "Montserrat-Medium",
    },
    toogletextoffline: {
        fontSize: 16,
        color: colors.pomegranate,
        fontFamily: "Montserrat-Medium",
    },

    toogle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    tooglestatus: {
        fontSize: 16,
        left: 25,
        fontFamily: "Montserrat-Medium",
        color: '#555555'
    },
    detailContainer: {
        justifyContent: 'space-between',
        width: '70%',
        height: 100,
        padding: 10
    },
    detailtext: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.grey,
        fontSize: 12,
    },
    detailquantity: {
        elevation: 3,
        left: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 25,
        padding: 5,
        width: 60
    },
    detailcontaineritem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    imagebox: {
        backgroundColor: colors.greyLite,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 10,
        width: '30%',
    },
    drawerIcon: {
        width: 90,
        height: 99,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 90,
        height: 90,
        position: 'absolute'
    },
});

export default DeleteCard;
