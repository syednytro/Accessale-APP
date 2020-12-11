import React, { useEffect, useState, useRef } from "react";
import {
    Text, View, StyleSheet, Dimensions, TouchableOpacity,
    ActivityIndicator, Animated, Image, FlatList, ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { base_url } from '../../Api/Api';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);

const PaymentCard = (props) => {

    const { userToken } = useSelector(state => state.appReducerData)
    const [Payments, setPayment] = useState([]);
    const componentId = props.componentId;
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getCards()
    }, []);

    const getCards = async () => {
        setLoading(true);
        Axios.get(`${base_url}my-payment-cards`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            console.log('payment card', res.data.Data)
            if (res.status == 200) {
                setPayment(res.data.Data)
                setLoading(false)
            }
        }).catch(error => {
            console.log('errr', error)
            setLoading(false)
        });
    }


    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);


    const _addCard = () => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'addcard',
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#fff",
                                    componentBackgroundColor: '#fff',
                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#fff',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    title: {
                                        name: "Add New Card"
                                    },
                                    rightButtons: [
                                        {
                                            icon: exitbtn,
                                            id: 'close-modal'
                                        }

                                    ],
                                    leftButtons: [
                                        {
                                            icon: backbtn,
                                            id: 'close-modal',
                                        }
                                    ],
                                    elevation: 0,
                                    drawBehind: true,
                                    background: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        });
    
    
    }

    const _click = () => {

        Navigation.showOverlay({
            component: {
                name: 'delete',
                id: 'delete-id',
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

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [5, 0, 0, 0],
        });
        return (
            <RectButton style={styles.rightAction} onPress={() => _click()}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    <Icon name={'trash-2'} size={22} color={'#EC0F0F'} />
                </Animated.Text>
            </RectButton>
        );
    };

    const _Checkout = (item) => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'paymentcheckout',
                            passProps:{
                                CardItem : item
                            },
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#fff",
                                    componentBackgroundColor: '#fff',
                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#fff',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    title: {
                                        name: "Checkout"
                                    },
                                    rightButtons: [
                                        {
                                            icon: exitbtn,
                                            id: 'close-modal'
                                        }

                                    ],
                                    leftButtons: [
                                        {
                                            icon: backbtn,
                                            id: 'close-modal',
                                        }
                                    ],
                                    elevation: 0,
                                    drawBehind: true,
                                    background: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        });
    
    
    }

    const renderItem = (item) => {
        console.log('item', item)
        return (
            <Swipeable renderRightActions={renderRightActions} >

                <TouchableOpacity onPress={() => _Checkout(item)} style={{ margin: 5 }}>
                    <ImageBackground
                        style={styles.backdrop}
                        source={require('../../assets/debit.png')}>
                        <View style={styles.backdropView}>
                            <View style={{ bottom: 20 }}>
                                <Text style={{fontSize:20, fontFamily: "Lato-Bold", color: '#fff' }}>{item.type}</Text>
                            </View>
                            <View style={{ bottom: 40, left: 200 }}>
                                {item.type == 'card' ? <Image source={require('../../assets/master.png')} /> :
                                    <Image source={require('../../assets/paypal.png')} />
                                }
                            </View>

                            <Text style={{ fontFamily: 'Lato-Light', fontSize: 20, color: "#fff" }}>{item.card_name}</Text>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10 }}>
                                <Text style={{ fontFamily: "Lato-Light", color: '#fff' }}>{item.card_no}</Text>
                                <Text style={{ fontFamily: "Lato-Light", color: '#fff' }}>{item.cvc}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </Swipeable>
        )
    }

    return (
        <View style={styles.container}>

            {Loading ? (
                <ActivityIndicator
                    color='red'
                    size={'large'}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                />
            ) :
                <FlatList
                    data={Payments}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item, key) => key.toString()}
                />
            }

            <ImageBackground
                style={styles.backdrop}
                source={require('../../assets/addcard.png')}  >
                <TouchableOpacity onPress={_addCard} style={{ height: 180, justifyContent: "center", alignItems: 'center' }}>
                    <Image source={require('../../assets/imagecross.png')} resizeMode='cover' style={{ position: 'absolute' }} />
                    <Text style={{ fontFamily: "Lato-Light", color: '#fff' }}>Add Card</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    leftAction: {
        alignItems: "center",
        justifyContent: 'center',
        width: 50,
    },
    rightAction: {
        // alignItems: "center",
        // backgroundColor;'red',
        justifyContent: 'center',
        width: 50,
    },

    backdrop: {
        height: Dimensions.get('window').width * (3 / 5),
        width: Dimensions.get('window').width,
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

export default PaymentCard;