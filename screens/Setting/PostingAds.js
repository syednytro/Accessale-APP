import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-back-outline', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('close-outline', 25, colors.primary).then(source => exitbtn = source);

const PostingAds = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const _AdsNavigate = (screen, title) => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: screen,
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
                                        text: title,
                                        fontSize:18,
                                        fontFamily: "Lato-Bold",
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

    return (
        <View style={styles.container}>

            <View style={{ margin: 15 }}>

                <TouchableOpacity onPress={() => _AdsNavigate('adspost','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to post an ad?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adsimage','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to add images?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adsvideo','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to add videos?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adspayment','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to ads payment?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adslocation','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>why postal code or location are mandatory?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adseffective','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to post an effective ad? (add humour, add pictures, 
                        use great titles...)</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adspromote','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>How to promote my ad?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adspromotebenifit','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>Benifit of promoting ads?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _AdsNavigate('adscost','Posting Ads')} style={styles.label}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.labeltext}>Cost of promoting ads?</Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        padding: 15
    },
    labeltext: {
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },

});

export default PostingAds;
