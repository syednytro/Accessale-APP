import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Navigation } from "react-native-navigation";
import { colors } from '../theme/theme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base_url } from '../Api/Api'
import { actionToken, actionUser } from '../redux/user/action';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

const Splash = (props) => {
    const componentId = props.componentId;

    // const [token, setToken] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getToken().then(token => {
            if (token !== null) {
                getData(token);
            } else {
                _Navigate()
            }
        })
    }, []);



    const getToken = async () => {
        return await AsyncStorage.getItem('token');
    }
    
    const getData = async (token) => {
        Axios.get(`${base_url}get-user-profile`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            console.log('token',res)
            dispatch(actionToken(token));
            dispatch(actionUser(res.data.user));
            navigateHome();
        }).catch(error => {
            console.log('errr', error)
        });
    }

    const navigateHome = () => {
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

    _Navigate = () => {
        setTimeout(() => {
            Navigation.setRoot({
                root: {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'mainscreen',
                                    options: {
                                        statusBar: {
                                            backgroundColor: '#fff',
                                            style: 'dark',
                                        },
                                        topBar: {
                                            visible: 'false',
                                        },
                                        layout: {
                                            orientation: ['portrait']
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            })
        }, 3000);
    }


    return (
        <View style={styles.mainbody}>
            <Image style={styles.imgsplash} source={require("../assets/Logo.png")}></Image>
            <Text style={styles.textsplash}>ACCESSALE</Text>
        </View>
    )
}

var styles = StyleSheet.create({

    mainbody: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgsplash: {
        width: 200, height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    textsplash: {
        margin: 10,
        fontSize: 30,
        fontFamily: 'Lato-Bold',
        color: colors.primary
    },


});

export default Splash