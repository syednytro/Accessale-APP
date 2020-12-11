
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";

let backbtn;
let phonebtn;
let moreBtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('phone', 25, colors.primary).then(source => phonebtn = source);
Icon.getImageSource('more-vertical', 25, colors.primary).then(source => moreBtn = source);

const data = [
    { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
    { name: 'Syah', status: 'DeActive', time: '9:14 AM', date: '1 Dec 2018' },
    { name: 'Izzat', status: 'DeActive', time: '1:15 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:60 PM', date: '1 Jan 2018' },
    { name: 'qazi', status: 'DeActive', time: '7:30 AM', date: '1 Jan 2018' },
    { name: 'sajjad', status: 'Active', time: '4:20 AM', date: '1 Jan 2018' },
    { name: 'mohsin', status: 'DeActive', time: '3:34 PM', date: '1 Jan 2018' },
    { name: 'asim', status: 'DeActive', time: '1:54 AM', date: '1 Jan 2018' },
    { name: 'umair', status: 'Active', time: '8:45 PM', date: '1 Jan 2018' },
    { name: 'ahsan', status: 'DeActive', time: '9:20 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '7:50 PM', date: '1 Jan 2018' },
];

const title = {
    text: 'dssdg',
    component: {
        name: 'customtopbar',
        alignment: 'center',
    },
};

const AllChat = () => {

    const [chatData, setchatData] = useState(data);


    const _renderItem = (item) => {
        // console.warn('item', item)
        return (
            <TouchableOpacity onPress={_Messages} style={styles.chat}>
                <View style={styles.imagecontainer}>
                    <Image source={require('../../assets/user1.png')}
                        style={styles.image} />

                    {item.item.status === 'Active' ?
                        <Image source={require('../../assets/dot.png')} style={styles.onlineStatus} /> :
                        <Text></Text>
                    }
                </View>

                <View style={styles.chatContainer}>

                    <View style={styles.textContainer}>
                        <Text style={styles.chattext}>{item.item.name}</Text>
                        <Text style={[styles.textStyle, { color: "#7D7D7D" }]}>hey how are you..??</Text>
                    </View>
                    <View style={{ padding: 5, alignItems: 'flex-end' }}>
                        <Text style={[styles.textStyle, { color: "#333333" }]}>{item.item.time}</Text>
                        <View style={styles.unreadmessagecontainer}>
                            <Text style={[styles.textStyle, { fontSize: 12, color: "#fff" }]}>2</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const _Messages = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'messages',
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
                                    title,
                                    leftButtons: [
                                        {
                                            id: 'back',
                                            icon: backbtn,
                                            alignment: 'right',
                                        },
                                    ],
                                    noBorder: true,
                                    elevation: 0,
                                },
                            },
                        },
                    },
                ],
            },
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.heading}>Messages</Text>
            </View>

            <View style={styles.searchcontainer}>
                <TouchableOpacity style={styles.searchicon}>
                    <Icon name={'search'} size={20} color={'#717171'} />
                </TouchableOpacity>
                <TextInput placeholder={'Search conversation'} style={styles.textInput} />
            </View>

            <FlatList
                data={chatData}
                renderItem={_renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        paddingBottom: 100
    },
    heading: {
        fontFamily: "Lato-Bold",
        fontSize: 18
    },
    searchcontainer: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: 'center',
        elevation: 1,
        backgroundColor: '#F0F0F0',
        justifyContent: "space-between",
        marginHorizontal: 25
    },
    textInput: {
        width: '90%',
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    imagecontainer: {
        padding: 10,
        width: '20%',
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    chattext: {
        fontFamily: "Lato-Bold",
        fontSize: 16
    },
    image: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 2,
        overflow: "hidden",
    },
    chat: {
        margin: 10,
        // width:'100%',
        // justifyContent:"space-between",
        flexDirection: 'row',
    },
    textContainer: {
        marginLeft: 10,
        height: 45,
        justifyContent: 'space-around'
    },
    unreadmessagecontainer: {
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: 'center',
        margin: 5,
        width: 20,
        height: 20,
        borderRadius: 10
    },
    searchicon: {
        width: '10%',
        alignItems: "center",
        justifyContent: 'center'
    },

    textStyle: {
        fontFamily: "Lato-Regular"
    },

    chatContainer: {
        width:'80%',
        // backgroundColor:"red",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    onlineStatus: {
        position: "absolute",
        marginTop: 45,
        width: 16,
        height: 16,
        alignItems: 'flex-end',
        justifyContent: "flex-end"
    }

});

export default AllChat
