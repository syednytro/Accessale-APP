
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    View,
    Text, Image, ScrollView,
    TextInput, TouchableOpacity,
} from 'react-native';
import { Navigation } from "react-native-navigation";
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import BottomTab from '../../app_stack/BottomTab';
import { loginApi } from '../../Api/Api';
import { actionToken } from '../../redux/user/action';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { emailValidate, passwordValidation } from '../../validate/Validate'

const Login = (props) => {

    const componentId = props.Cid;

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passError, setpassError] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [Showcheck, setShowcheck] = useState(false);
    const [loader, setLoader] = useState(false);
    const [loginProgress, setLoginProgress] = useState(false);
    const [Errorv, seterrorV] = useState(false);

    const _showPassword = () => setShowPassword(!showPassword);

    const _Password = (password) => {
        setPassword(password)
    }
    const _Email = (email) => {
        setEmail(email)
    }

    const _forgotPassword = () => {
        Navigation.push(componentId, {
            component: {
                name: 'forgot',
                options: {
                    topBar: {
                        noBorder: true,
                        elevation: 0,
                        // visible:false
                    },
                    statusBar: {
                        style: 'dark',
                        backgroundColor: '#fff'
                    },
                    layout: {
                        orientation: ['portrait']
                    },

                },
            }
        })
    }
    const _homeScreen = () => {
        // // BottomTab()
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

    const _validateText = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (text) {
            if (reg.test(text)) {
                // console.warn('true mail')
                setShowcheck(true)
                _Email(text)
            } else {
                // setEmailValidate(false)
            }
        }

    }

    const _unauthorizedOverlay = () => {
        Navigation.showOverlay({
            component: {
                name: 'alert-notification',
                passProps: {
                    icon: 'info',
                    text: 'You might have entered wrong email or password',
                    bgColor: '#c0392b',
                },
                options: {
                    overlay: {
                        interceptTouchOutside: true,
                    },
                    statusBar: {
                        backgroundColor: '#fff',
                        style: 'dark',
                    },
                },
            },
        });
    };

    const _Login = () => {
        let passwordValue = passwordValidation(password);
        let emailvalue = Showcheck

        if (passwordValue && emailvalue) {
            setLoginProgress(true);
            let user = {
                email: email,
                password: password
            }
            // console.warn('user', user)
            loginApi(user)
                .then(res => {
                    console.log('res', res)
                    if (res.status === 200) {
                        console.log('thek')
                        AsyncStorage.setItem('token', res.data.access_token)
                        dispatch(actionToken(res.data.access_token));
                        _homeScreen();
                    }
                    setLoginProgress(false);
                }).catch(error => {
                    console.log('err', error.response.status)
                    if (error.response.status === 400) {
                        console.log('err')
                        setemailError("")
                        setpassError("")
                        setEmail("")
                        setPassword("")
                        _unauthorizedOverlay()
                    }

                    setLoginProgress(false);
                });
        } else {
            setemailError(emailvalue ? '' : 'Email is either empty or invalid')
            setpassError(passwordValue ? '' : 'Password must be of at least 8 digits')
        }
    }

    const _EmailError = () => {
        return (
            <View>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: "red" }}>{emailError}</Text>
            </View>
        )
    }

    const _PasswordError = () => {
        return (
            <View>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: "red" }}>{passError}</Text>
            </View>
        )
    }

    const _LoginButton = () => {
        if (!loader) {
            return <ActivityIndicator size="small" color="#fff" animating={loader} />
        } else {
            <Text style={styles.buttontext}>Log In</Text>
        }
    }

    const _renderButtonProgress = () => {
        if (loginProgress) {
            return <ActivityIndicator size="small" color="#fff" animating={loginProgress} />
        } else {
            return <Text style={styles.buttontext}>Log In</Text>
        }
    }

    return (
        <ScrollView style={styles.container}>

            <View style={{ margin: 15 }}>
                <View>
                    <Text style={styles.textstyle}>Email Address</Text>
                    <View style={{ borderBottomWidth: 1, alignItems: "center", borderBottomColor: '#BBBBBB', flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={(text) => _validateText(text)}
                        />
                        <Icon name={Showcheck ? 'check' : ''} color="#2c3e50" size={20} />
                    </View>
                </View>
                {_EmailError()}

                <View style={{ marginVertical: 5 }}>
                    <Text style={styles.textstyle}>Passsword</Text>
                    <View style={{ borderBottomWidth: 1, alignItems: "center", borderBottomColor: '#BBBBBB', flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            style={styles.textInput}
                            value={password}
                            onChangeText={_Password}
                            secureTextEntry={showPassword}
                        />
                        <TouchableOpacity onPress={_showPassword} >
                            <Icon name={showPassword ? "eye-off" : "eye"} color="#2c3e50" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                {_PasswordError()}

                <TouchableOpacity onPress={_forgotPassword} >
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_Login} style={styles.button}>
                    {_renderButtonProgress()}
                </TouchableOpacity>

                <View style={styles.row}>
                    <View style={styles.rowcontainer} />
                    <Text style={styles.rowtext}>OR</Text>
                    <View style={styles.rowcontainer} />
                </View>

                <View style={styles.btncontainer}>
                    <View style={styles.socialbtn}>
                        <Image source={require('../../assets/google.png')} style={styles.cardimage} />
                        <Text style={styles.paytext}>Sign in with Google</Text>
                    </View>
                    <View style={styles.socialbtn}>
                        <Image source={require('../../assets/facebook.jpg')} style={styles.cardimage} />
                        <Text style={styles.paytext}>Sign in with Facebook</Text>
                    </View>
                    <View style={styles.socialbtn}>
                        <Image source={require('../../assets/apple.png')} style={styles.cardimage} />
                        <Text style={styles.paytext}>Sign in with Apple</Text>
                    </View>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Dont have an account?Swipe left</Text>
                    <Text style={[styles.labeltext, { color: '#3498db' }]}>to create new account</Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10
    },
    textInput: {
        flex: 1,
        fontFamily: 'Lato-Regular',
        // borderBottomWidth: 1,
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    button: {
        marginVertical: 5,
        backgroundColor: colors.primary,
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
        marginHorizontal: 10,
        marginVertical: 10,
    },
    error: {
        borderWidth: 3,
        borderColor: 'red'
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
    btncontainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    socialbtn: {
        marginVertical: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        height: 55,
        borderColor: colors.primary,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    },
    paytext: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginLeft: 20
    },
    cardimage: {
        marginLeft: 20,
        resizeMode: 'stretch',
        borderRadius: 15,
        width: 30,
        height: 30
    },
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    labeltext: {
        fontSize: 16,
        fontFamily: 'Lato-Regular'
    },
    textstyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary
    },
    forgotText: {
        color: colors.secondary,
        fontSize: 18,
        fontFamily: 'Lato-Regular'
    }


});

export default Login
