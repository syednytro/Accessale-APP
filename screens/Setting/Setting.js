import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions, ScrollView,
    FlatList, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actionToken } from '../../redux/user/action'
import { useDispatch } from 'react-redux';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-back-outline', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('close-outline', 25, colors.primary).then(source => exitbtn = source);


const Setting = (props) => {

    const dispatch = useDispatch();

    const _paymentScreen = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'paymentcard',
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

    const _allPageNavigate = (screen, title) => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: screen,
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#F5F6F8",
                                    componentBackgroundColor: '#F5F6F8',
                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,

                                    title: {
                                        text: title,
                                        fontFamily: "Lato-Regular",
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


    const _Mainpage = () => {
        Navigation.setRoot({
            root: {
                stack: {
                    options: {
                        topBar: {
                            visible: false
                        }
                    },
                    children: [
                        {
                            component: {
                                name: 'mainscreen'
                            },
                            options: {
                                topBar:
                                {
                                    visible: false,
                                    drawBehind: true,
                                    backButton: {
                                        visible: false
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        });
    }

    const _logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch(actionToken(null));
            return _Mainpage()
        }
        catch (exception) {
            return false;
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 24, fontFamily: "Lato-Bold" }}>Settings</Text>
            </View>

            <View style={{ backgroundColor: '#fff' }}>

                {/* <TouchableOpacity onPress={_paymentScreen} style={{ margin: 10, padding: 10, borderBottomWidth: .5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Image source={require('../../assets/Edit.png')} style={{width:15,height:15}} />
                        <Text style={{ colors: "red",fontSize:16,marginLeft: 10,fontFamily:'Lato-Regular' }}>Payment Screen</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity> */}


                <TouchableOpacity onPress={() => _allPageNavigate('editProfile', 'Profile Edit')}
                    style={styles.labelcontainer}>
                    <View style={styles.label}>
                        <Image source={require('../../assets/Edit.png')} style={styles.iconimage} />
                        <Text style={styles.labeltext}>Profile Edit</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _allPageNavigate('helpdesk', 'Help Desk')}
                    style={styles.labelcontainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/Chat.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>Help Desk</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _allPageNavigate('privacypolicy', 'Privacy Policy')}
                    style={styles.labelcontainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/shield.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>Privacy Policy Desk</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _allPageNavigate('termscondition', 'Terms & Conditions')}
                    style={styles.labelcontainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/Notification.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>Terms & Condition</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: '#fff', marginVertical: 20 }}>

                <TouchableOpacity onPress={() => _allPageNavigate('feedback', 'Give Feedback')} style={styles.labelcontainer}>
                    <View style={styles.label}>
                        <Image source={require('../../assets/Document.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>Give feedback</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _allPageNavigate('about', 'About')} style={styles.labelcontainer}>
                    <View style={styles.label}>
                        <Image source={require('../../assets/info.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>About</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _allPageNavigate('bug', 'Report a Bug')} style={styles.labelcontainer}>
                    <View style={styles.label}>
                        <Image source={require('../../assets/bug.png')} style={{ width: 15, height: 15 }} />
                        <Text style={styles.labeltext}>Report a Bug</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={_logout} style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                <Image source={require('../../assets/Logout.png')} style={{ width: 15, height: 15 }} />
                <Text style={{ colors: "red", marginLeft: 10, fontSize: 16, fontFamily: 'Lato-Regular' }}>Log Out</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,

    },
    labelcontainer: {
        margin: 10,
        padding: 10,
        borderBottomWidth: .5,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    label: {
        flexDirection: 'row', alignItems: 'center'
    },
    labeltext: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Lato-Regular'
    },
    iconimage: {
        width: 15,
        height: 15
    }

});

export default Setting;
