

import React, { useEffect, useState } from "react";
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Navigation } from "react-native-navigation";
import { colors } from '../../theme/theme';
import BottomTab from '../../app_stack/BottomTab';
import { useDispatch, useSelector } from 'react-redux';
import { cos } from "react-native-reanimated";
import { base_url,image_url } from "../../Api/Api";

const UserProfile = (props) => {

    const componentId = props.componentId;
    // console.warn(componentId)
    const { userData, userToken } = useSelector(state => state.appReducerData);


    useEffect(() => {
        console.log('user', image_url+userData.profile_img)
        console.log('token', userToken)
    }, [])

    const _homeScreen = () => {
        Navigation.setStackRoot(componentId, {
            component: {
                name: 'bottomtab',
                options: {
                    topBar: {
                        visible: false,
                    }
                },
            },
        });
    }


    return (
        <View style={styles.container}>

            <View style={styles.iconcontainer}>
                <View style={styles.Headingcontainer}>
                    <Text style={styles.heading}>Welcome</Text>
                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/hello.png')}></Image>
                </View>
                {/* <Image style={styles.imgsplash} source={require('../../assets/avtar4.png')}></Image> */}
                <Image style={styles.imgsplash} source={{uri:image_url+userData.profile_img}}></Image>
            </View>

            <View style={styles.label}>
                <Text style={styles.labelname}>{userData.name}</Text>
                <Text style={styles.labeltext}>To the home of buyers and sellers</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={_homeScreen} style={styles.button}>
                    <Text style={styles.buttontext}>Tutorials</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <View style={styles.rowcontainer} />
                <Text style={styles.rowtext}>OR</Text>
                <View style={styles.rowcontainer} />
            </View>

            <TouchableOpacity onPress={_homeScreen}
                style={styles.skipcontainer}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20
    },
    Headingcontainer: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: 30,
        fontFamily: 'Lato-Bold'
    },
    imgsplash: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    iconcontainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 250,
    },
    button: {
        marginVertical: 10,
        backgroundColor: colors.primary,
        width: 320,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    buttontext: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },
    row: {
        flexDirection: 'row',
        margin: 30,
    },
    rowcontainer: {
        backgroundColor: '#bdc3c7',
        height: 1.5,
        flex: 1,
        alignSelf: 'center'
    },
    rowtext: {
        alignSelf: 'center',
        paddingHorizontal: 5,
        color: '#949494',
        fontFamily: 'Lato-Regular',
        fontSize: 18
    },
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        height: 60,
    },
    labelname: {
        fontSize: 24,
        color: "#373737",
        fontFamily: 'Lato-Regular'
    },
    labeltext: {
        fontSize: 18,
        color: '#747474',
        fontFamily: 'Lato-Regular'
    },
    skipcontainer: {
        justifyContent: 'center', alignItems: 'center'
    },
    skiptext: {
        fontSize: 22, fontFamily: 'Lato-Regular', color: colors.secondary
    },
});

export default UserProfile
