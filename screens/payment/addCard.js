import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';
import { ScrollView } from "react-native-gesture-handler";
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { base_url, image_url } from '../../Api/Api';
import { set } from "react-native-reanimated";
import TextInputMask from 'react-native-text-input-mask';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);

const AddCard = (props) => {

    const componentId = props.componentId;

    const { userToken } = useSelector(state => state.appReducerData)

    const [Cardnumber, setCardNumber] = useState("");
    const [CardName, setCardname] = useState("");
    const [Expiry, setExpiry] = useState("");
    const [Cvc, setCvc] = useState("");
    const [Error, setError] = useState("");
    const [type, setType] = useState("");
    const [Month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [Email, setEmail] = useState("");
    const [Paypal, setPaypal] = useState("");
    const [loginProgress, setLoginProgress] = useState(false);

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const _successCreate = () => {

        Navigation.showOverlay({
            component: {
                name: 'sucesscard',
                id: 'success-id',
                options: {
                    statusBar: {
                        backgroundColor: '#fff',
                        style: 'dark',
                    },
                    overlay: {
                        interceptTouchOutside: true,
                        handleKeyboardEvents: false
                    }
                }
            }
        })
    }

    const _Checkout = () => {

        // Navigation.showModal({
        //     stack: {
        //         children: [
        //             {
        //                 component: {
        //                     name: 'paymentcheckout',
        //                     options: {
        //                         layout: {
        //                             orientation: ['portrait'],
        //                             backgroundColor: "#F5F6F8",
        //                             componentBackgroundColor: '#F5F6F8',
        //                         },
        //                         statusBar: {
        //                             style: 'dark',
        //                             visible: true,
        //                             backgroundColor: '#F5F6F8',
        //                         },
        //                         topBar: {
        //                             visible: true,
        //                             noBorder: true,
        //                             title: {
        //                                 text: 'Checkout',
        //                             },
        //                             rightButtons: [
        //                                 {
        //                                     icon: exitbtn,
        //                                     id: 'close-modal'
        //                                 }

        //                             ],
        //                             leftButtons: [
        //                                 {
        //                                     icon: backbtn,
        //                                     id: 'close-modal',
        //                                 }
        //                             ],
        //                             elevation: 0,
        //                             drawBehind: true,
        //                             background: {
        //                                 color: 'transparent',
        //                             },
        //                         },
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        // });
    
        Navigation.setStackRoot(componentId, {
            component: {
                name: 'paymentcard',
                options: {
                    topBar: {
                        visible: false,
                    }
                },
            },
        });
    }

    const _changeCardName = (text) => {
        setCardname(text)
    }

    const _changeCVcNumber = (text) => {
        console.log(text)
        setCvc(text)
    }

    const handleCardNumber = (formatted, extracted) => {
        setCardNumber(extracted)
    }

    const _changeExpiryNumber = (text) => {

        // let mytext = text.match(/.{2}|.{1,2}/g)
        let mytext = text.split(/\s*\/\s*/g)
        console.log('expiry', mytext)
        setMonth(mytext[0])
        setYear(mytext[1])


    }

    const _cardSelect = () => {
        Navigation.showOverlay({
            component: {
                name: 'card',
                passProps: {
                    cardType: _cardChange
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
    }

    const _cardChange = (item) => {
        console.log('card', item)
        setType(item)
    }

    const _AddVisaCard = () => {
        console.log('aya')
        var right_now = new Date();
        var the_year = right_now.getFullYear();
        var _month = right_now.getMonth();

        if (type == "") {
            setError('Please Select Card Type')
        }
        else if (CardName == "") {
            setError('Please Enter Card Name')
        } else if (Cardnumber == "") {
            setError('Please Enter Card number')
        } else if (Month != _month + 1) {
            setError('Please Enter valid Month')
        } else if (Cvc == "") {
            setError('Please Enter CVC number')
        } else {
            setLoginProgress(true);

            let CardDetail = {
                type: type,
                card_name: CardName,
                card_no: Cardnumber,
                cvc: Cvc,
                month: Month,
                year: year
            }

            console.log('dettt', CardDetail)

            Axios(`${base_url}save-payment-card`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
                data: CardDetail
            }).then(res => {
                console.log('response', res)
                if(res.status == 200){
                    _Checkout()
                }
                setLoginProgress(false);
                setError('')
            }).catch(error => {
                console.log('errr', error.response)
                setLoginProgress(false);
                setError('')
            });
        }

    }

    const _PaypalCard = () => {

        if (Email == "") {
            setError('Plase Enter Email')
        } else if (Paypal == "") {
            setError('Please enter Name')
        } else {

            let CardDetail = {
                type: type,
                paypal_name: Paypal,
                paypal_email: Email,
            }

            Axios(`${base_url}save-payment-card`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
                data: CardDetail
            }).then(res => {
                console.log('response', res)
                if(res.status == 200){
                    _Checkout()
                }
                setLoginProgress(false);
                setError('')


            }).catch(error => {
                console.log('errr', error.response)
                setLoginProgress(false);
                setError('')
            });



        }
    }

    const ViscarsProgress = () => {
        if (loginProgress) {
            return <ActivityIndicator size="small" color="#fff" animating={loginProgress} />
        } else {
            return <Text style={styles.buttontext}>Add Card</Text>
        }
    }

    const _renderButtonProgress = () => {
        if (loginProgress) {
            return <ActivityIndicator size="small" color="#fff" animating={loginProgress} />
        } else {
            return <Text style={styles.buttontext}>Add Card</Text>
        }
    }

    const handleName = (text) => {
        setPaypal(text)
    }

    const _changeEmail = email => setEmail(email);


    return (
        <View style={styles.container}>

            <View style={{ height: 220, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground
                    style={styles.backdrop}
                    source={require('../../assets/debit.png')}>
                    <View style={{
                        position: 'absolute', top: 0, left: 0, right: 230, width: '100%', bottom: 0,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <View style={{ bottom: 30, right: 100 }}>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lato-Regular" }}>{type} </Text>
                            </View>

                            <View style={{ bottom: 30, left: 80 }}>
                                {type == 'card' ? <Image source={require('../../assets/master.png')} /> :
                                    <Image source={require('../../assets/paypal.png')} />
                                }
                            </View>

                        </View>

                        <View style={{ width: 280 }}>
                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lato-Regular" }}>{CardName} </Text>
                        </View>
                        <View style={{ width: 320, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <View style={{ width: 240 }}>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lato-Regular" }}>{Cardnumber} </Text>
                            </View>

                            <View>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lato-Regular" }}>{Cvc}</Text>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
            </View>

            <ScrollView style={{ marginHorizontal: 10 }}>
                <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                    {Error == "" ? <Text></Text> : <Text style={{ color: colors.secondary, fontSize: 18, fontFamily: "Lato-Bold" }}>{Error}</Text>}
                </View>


                <TouchableOpacity onPress={_cardSelect}
                    style={{
                        height: 45, borderRadius: 10, paddingHorizontal: 10, backgroundColor: "#F0F0F0",
                        flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'
                    }}>

                    {type == "" ?
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>Select Card Type</Text>
                        :
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>{type}</Text>

                    }
                    <Icon name={'chevron-down'} size={24} />
                </TouchableOpacity>

                {type == "" ?
                    <View /> : type == 'card' ? <View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>Card Number</Text>
                            <TextInputMask
                                style={styles.textinput}
                                mask={"[0000] [0000] [0000] [0000]"}
                                keyboardType={'number-pad'}
                                // value={value}
                                // maxLength={16}
                                onChangeText={handleCardNumber}
                            />

                        </View>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>Name on Card</Text>
                            <TextInput
                                onChangeText={(text) => _changeCardName(text)}
                                style={styles.textinput} />
                        </View>

                        <View style={{ marginVertical: 5, flexDirection: "row" }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>MM/YY</Text>
                                <TextInputMask
                                    style={styles.textinput}
                                    mask={"[00]/[00]"}
                                    keyboardType={'number-pad'}
                                    // value={value}
                                    onChangeText={(text) => _changeExpiryNumber(text)}
                                />

                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>CVC</Text>
                                <TextInputMask
                                    style={styles.textinput}
                                    mask={"[000]"}
                                    keyboardType={'number-pad'}
                                    // value={value}
                                    onChangeText={(text) => _changeCVcNumber(text)}
                                />

                            </View>

                        </View>

                        <TouchableOpacity onPress={_AddVisaCard} style={styles.button}>
                            {ViscarsProgress()}
                        </TouchableOpacity>

                    </View>
                        :
                        type == 'paypal' ?
                            <View>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>Paypal Name</Text>
                                    <TextInput
                                        onChangeText={(text) => handleName(text)}
                                        style={styles.textinput} />
                                </View>

                                <View style={{ marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 10 }}>Paypal Email</Text>
                                    <TextInput
                                        onChangeText={_changeEmail}
                                        autoCapitalize="none"
                                        style={styles.textinput} />
                                </View>

                                <TouchableOpacity onPress={_PaypalCard} style={styles.button}>
                                    {_renderButtonProgress()}
                                </TouchableOpacity>
                            </View>
                            : <Text></Text>
                }

            </ScrollView>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        backgroundColor: '#F0F0F0',
        fontFamily: 'Lato-Regular',
        margin: 5,
        borderRadius: 10,
        fontSize: 15
    },
    button: {
        marginVertical: 10,
        backgroundColor: colors.primary,
        // width: 300,
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

    backdrop: {
        resizeMode: 'cover',
        // height:100,
        // height: 200,
        width: '100%',
        marginTop: 35,
        justifyContent: "center",
        alignItems: 'center',
        height: Dimensions.get('window').width * (3 / 5),
        // width: Dimensions.get('window').width,
    },
    backdropView: {
        height: 165,
        marginTop: 40,
        padding: 30,
        marginLeft: 20,
        justifyContent: 'flex-end',
        width: 320,
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        // backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    }

})

export default AddCard;