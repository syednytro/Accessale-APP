import React, { useEffect } from "react";
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Navigation } from "react-native-navigation";
import { colors } from '../../theme/theme';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';


const MainScreen = (props) => {

    const componentId = props.componentId;


    useEffect(() => {
        _configureGoogleSignIn()
    }, [])

    const _configureGoogleSignIn = () => {
        GoogleSignin.configure({
            scopes: ['profile', 'email'],
            webClientId: '648183876337-d6mdaoip6pa63dbfb4mii1rago34g977.apps.googleusercontent.com',
            offlineAccess: true,
            forceCodeForRefreshToken: true,
            //   forceConsentPrompt: true,
        });
    }

    const _loginWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('user information', userInfo);

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn('GOogle sign cancel')
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn('google in progress')
                // operation (e.g. sign in) is in progress already

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.warn('google outdated')

            } else {
                console.warn('google error')
                // some other error happened
            }
        }
    };


    const LogSignup = () => {
        Navigation.push(componentId, {
            component: {
                name: 'logsign',
                options: {
                    topBar: {
                        // noBorder: true,
                        // elevation: 0,
                        visible: false
                    },
                    layout: {
                        orientation: ['portrait']
                    },
                    statusBar: {
                        style: 'dark',
                        backgroundColor: '#fff'
                    }

                },
            }
        })
    }


    return (
        <View style={styles.container}>

            <View style={styles.iconcontainer}>
                <Image style={styles.imgsplash} source={require('../../assets/Logo.png')}></Image>
                <TouchableOpacity onPress={LogSignup} style={styles.button}>
                    <Text style={styles.buttontext}>Create New Account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <View style={styles.rowcontainer} />
                <Text style={styles.rowtext}>OR</Text>
                <View style={styles.rowcontainer} />
            </View>

            <View style={styles.label}>
                <Text style={styles.labeltext}>have an account?</Text>
                <Text style={styles.labeltext}>Login with email and password</Text>
            </View>

            <View style={styles.btncontainer}>
                <TouchableOpacity onPress={_loginWithGoogle} style={styles.socialbtn}>
                    <Image source={require('../../assets/google.png')} style={styles.cardimage} />
                    <Text style={styles.paytext}>Sign in with Google</Text>
                </TouchableOpacity>
                <View style={styles.socialbtn}>
                    <Image source={require('../../assets/facebook.jpg')} style={styles.cardimage} />
                    <Text style={styles.paytext}>Sign in with Facebook</Text>
                </View>
                <View style={styles.socialbtn}>
                    <Image source={require('../../assets/apple.png')} style={styles.cardimage} />
                    <Text style={styles.paytext}>Sign in with Apple</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    imgsplash: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    iconcontainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center', height: 300
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
        flexDirection: 'row', marginHorizontal: 10
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
        color: colors.primary,
        fontFamily: 'Lato-Regular',
        fontSize: 18
    },
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    labeltext: {
        fontSize: 18,
        fontFamily: 'Lato-Regular'
    },
    btncontainer: {
        marginVertical: 20,
        alignItems: 'center'
    },
    socialbtn: {
        marginVertical: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        height: 55,
        borderColor: colors.primary,
        width: 320,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    },
    socialbtntext: {
        fontSize: 18,
        fontFamily: 'Lato-Regular'
    },
    cardimage: {
        marginLeft: 20,
        resizeMode: 'stretch',
        borderRadius: 15,
        width: 30,
        height: 30
    },
    paytext: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        marginLeft: 20
    },

});

export default MainScreen
