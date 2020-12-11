import React, { useEffect, useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, Image,
    TextInput, TouchableOpacity
} from 'react-native';
import { colors } from '../../theme/theme';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Feather'
import { emailValidate, passwordValidation } from '../../validate/Validate'

const SignUp = (props) => {

    const componentId = props.Cid;

    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [usernameError, setUsername] = useState('');
    const [passError, setpassError] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const _showPassword = () => setShowPassword(!showPassword);
    const [Showemail, setShowemail] = useState(false);
    const [Showusername, setShowusername] = useState(false);

    const _userInfo = (user) => {
        Navigation.push(componentId, {
            component: {
                name: 'userinfo',
                passProps: {
                    users: user
                },
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

    // const onValidateUsername = (text) => {
    //     const value = text;
    //     // const regex = /^[0-9a-zA-Z(\-)]+$/; //this will admit letters, numbers and dashes
    //     const regex = /^[0-9a-zA-Z]+$/;
    //     if (value.match(regex)) {
    //         // this.setState({ inputValue: value });
    //         console.warn('value')
    //     }else{
    //         console.warn('error')
    //     }
    // }

    const alphanumeric = (inputtxt) => {
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if (inputtxt.match(letterNumber)) {
            _userName(inputtxt)
            // console.warn('runn',inputtxt)
        } else {
            // console.warn('errrr')
        }

    }

    const _validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (text) {
            if (reg.test(text)) {
                // console.warn('true mail')
                setShowemail(true)
                _Email(text)
            } else {
                // console.warn('wrong mail')
            }
        }
    }

    _Email = (text) => {
        setEmail(text)
    }

    const _Password = (password) => {
        setPassword(password)
    }

    const _userName = (text) => {
        setName(text)
    }

    const _Register = () => {

        let passwordValue = passwordValidation(password);
        let emailvalue = Showemail
        let nameValue = Name.length > 0

        if (passwordValue && emailvalue && nameValue) {
            let user = {
                name: Name,
                email: email,
                password: password
            }
            // console.warn('user', user)
            setemailError('')
            setUsername('')
            setpassError('')
            _userInfo(user)
        } else {
            setemailError(emailvalue ? '' : 'Email is either empty or invalid')
            setUsername(nameValue ? '' : 'UserName is Required')
            setpassError(passwordValue ? '' : 'Password must be of at least 8 digits')
        }

    }

    const _ErrorEmail = () => {
        return (
            <View style={{ marginVertical: 5 }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: "red" }}>{emailError}</Text>
            </View>
        )
    }

    const _ErrorUsername = (err) => {
        return (
            <View style={{ marginVertical: 5 }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: "red" }}>{usernameError}</Text>
            </View>
        )
    }

    const _ErrorPassword = (err) => {
        return (
            <View style={{ marginVertical: 5 }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: "red" }}>{passError}</Text>
            </View>
        )
    }



    return (
        <View style={styles.container}>

            <View style={{ margin: 15 }}>
                <View style={styles.textBox}>
                    <Text style={[styles.textStyle, { color: colors.primary }]}>Email Address</Text>
                    <View style={{ borderBottomWidth: 1, alignItems: "center", borderBottomColor: '#BBBBBB', flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            style={[styles.textInput]}
                            autoCapitalize='none'
                            onChangeText={(text) => _validateEmail(text)}
                        />
                        <Icon name={Showemail ? 'check' : ''} color="#2c3e50" size={20} />
                    </View>
                </View>
                {_ErrorEmail()}

                <View style={styles.textBox}>
                    <Text style={styles.textStyle}>Username</Text>
                    <View style={{ borderBottomWidth: 1, alignItems: "center", borderBottomColor: '#BBBBBB', flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            style={[styles.textInput]}
                            // onChangeText={_userName}
                            onChangeText={(text) => alphanumeric(text)}
                        />
                        <Icon name={Showusername ? 'check' : ''} color="#2c3e50" size={20} />
                    </View>
                </View>
                {_ErrorUsername()}

                <View style={styles.textBox}>
                    <Text style={styles.textStyle}>Passsword</Text>
                    <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={styles.Input}
                            onChangeText={_Password}
                            secureTextEntry={showPassword}
                        />
                        <TouchableOpacity onPress={_showPassword}
                            style={{ alignItems: 'flex-end', padding: 10, justifyContent: "flex-end" }}>
                            <Icon name={showPassword ? "eye-off" : "eye"}
                                color={colors.accent} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                {_ErrorPassword()}


                <TouchableOpacity onPress={_Register} style={styles.button}>
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>


                <View style={styles.label}>
                    <Text style={styles.labeltext}>By Creating an account you agree to our</Text>
                    <Text style={[styles.labeltext, { color: '#3498db' }]}>Term of Services <Text style={{ color: colors.accent }}>and</Text> Privacy Policy</Text>
                </View>

            </View>
        </View>
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
    Input: {
        fontFamily: 'Lato-Regular',
        flexDirection: "row",
        height: 40,
        fontSize: 15,
        width: '90%'
    },
    button: {
        marginVertical: 20,
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
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    labeltext: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.accent
    },
    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },
    textBox: {
        height: 45,
        marginVertical: 10
    }


});

export default SignUp
