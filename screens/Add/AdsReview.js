import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, BackHandler, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from "react-native-navigation";
import { colors } from '../../theme/theme';

let backbtn;
let phonebtn;
let moreBtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('phone', 25, colors.primary).then(source => phonebtn = source);
Icon.getImageSource('more-vertical', 25, colors.primary).then(source => moreBtn = source);

const title = {
    text: 'dssdg',
    component: {
        name: 'customtopbar',
        alignment: 'center',
    },
};


const AdsReview = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const back = () => {
        Navigation.dismissModal(componentId);
        return true;
    };

    useEffect(() => {
        console.log(props.updatedata)
        BackHandler.addEventListener("hardwareBackPress", back);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const [myData, setMyData] = useState([1, 2, 3, 4, 5]);

    const renderItem = () => {
        return (
            <View style={{ backgroundColor: "#fff", margin: 10, elevation: 5, borderRadius: 20 }}>
                <TouchableOpacity style={{ width: 160 }}>
                    <Image source={require('../../assets/product.png')}
                        style={{ resizeMode: 'stretch', borderRadius: 10, margin: 5, width: 150, alignItems: 'center', justifyContent: 'center', height: 200 }} />
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontFamily: 'Lato-Regular' }}>Iphone 11 With charger</Text>
                    </View>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Lato-Bold', color: colors.primary }}>$56.2</Text>
                        <Icon name={'heart'} size={20} color={colors.secondary} />
                    </View>

                </TouchableOpacity>
            </View>
        )
    }


    const _chatOwner = () => {
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

            <ScrollView>

                <View style={{ padding: 5, flexDirection: 'row' }}>
                    <View style={{ width: '45%', margin: 5 }}>
                        <Image source={require('../../assets/1.png')} style={{ borderRadius: 10, width: 160, height: 220 }} />
                    </View>
                    <View style={{ width: '45%', margin: 5 }}>
                        <Image source={require('../../assets/3.png')} style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
                        <Image source={require('../../assets/2.png')} style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />

                    </View>
                </View>

                <View style={{ margin: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22 }}>$120</Text>
                        <Icon name={'heart'} size={18} color={colors.secondary} />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, color: '#464646', fontFamily: "Lato-Regular" }}>Working with 11 with charger</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Image source={require('../../assets/map.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ marginLeft: 5, fontSize: 14, color: '#828282' }}>174 queen street toronto Ontanio fdk</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>Description</Text>
                        <Text style={{ fontSize: 14, color: '', marginVertical: 10 }}>karachi pakistan karach174 d fld ldg dgld ld gdl dgl  queen streefdk</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, color: colors.primary, fontFamily: "Lato-Regular" }}>Related Ads</Text>
                    </View>

                </View>

                <FlatList
                    data={myData}
                    renderItem={renderItem}
                    keyExtractor={item => renderItem(item.index)}
                    horizontal={true}
                />

            </ScrollView>

            <View onPress={_chatOwner} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={_chatOwner} style={styles.button}>
                    <Text style={styles.buttontext}>Chat with Owner</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
    },
    textInput: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
    button: {
        marginVertical: 10,
        backgroundColor: colors.primary,
        width: 300,
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
    bottomView: {
        width: '100%',
        height: 70,
        // flexDirection: "row",
        // justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    titlecontainer: {
        borderBottomWidth: .5,
        margin: 5
    },
    titletext: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.primary
    },
    imagecontainer: {
        borderBottomWidth: .5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5, flexDirection: "row",
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },

    bottomView: {
        width: '100%',
        height: 70,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

});



export default AdsReview;