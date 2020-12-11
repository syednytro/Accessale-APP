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

const HelpDesk = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const _NavigatePages = (screen, title) => {
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
                                        fontFamily: "Lato-Regular",
                                        fontSize:18
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
            <View style={{ margin: 20 }}>
                <Text style={styles.heading}>Welcome to our Help Desk</Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.contentText}>Welcome to our Help Desk
                    To be able to log in, you must first confirm your email address. You’ll receive an email from us after registration prompting you to do this. Click on the link in the email to confirm your registration. You will then be redirected to a form where you have to choose your username and password. After this, your registration is complete and you can log in with your chosen password.
                    {"\n"}{"\n"}
                  If you have not received a confirmation email, please check your spam folder.  If you have received an email, but the confirmation link does not take you to the correct page, please copy the full link of that page from the URL bar at the top of your browser and paste it into a new window. Accessale.com The Worldwide classifieds Platform.</Text>
                </View>

                <View>
                    <Text style={styles.heading}>Tell us how can we help you</Text>
                </View>

                <View style={styles.label}>

                    <TouchableOpacity onPress={() => _NavigatePages('postingads','Posting Ads')} style={styles.section}>
                        <Text style={styles.labeltext}>Posting ads</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _NavigatePages('viewprofile','Viewing Profiles')} style={styles.section}>
                        <Text style={styles.labeltext}>Viewing Profiles</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _NavigatePages('safety','Safety')} style={styles.section}>
                        <Text style={styles.labeltext}>Safety</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 60,
    },
    heading: {
        fontSize: 20,
        fontFamily: "Lato-Regular"
    },

    contentText: {
        color: '#272727',
        fontFamily: 'Lato-Light',
        fontSize: 16
    },
    label: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    section: {
        backgroundColor: "#DBDBDB",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    labeltext: {
        fontFamily: 'Lato-Regular'
    }
});

export default HelpDesk;
