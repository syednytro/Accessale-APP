
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import { color } from "react-native-reanimated";


const UserForm = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const getDrawer = () => {
        RNNDrawer.showDrawer({
            component: {
                name: "CustomDrawer",
                passProps: {
                    direction: "left",
                    drawerScreenWidth: "70%",
                    style: {
                        backgroundColor: 'transparent',
                        marginLeft: 30
                    },
                    parentComponentId: componentId,
                },
            }
        });

    }


    return (
        <View style={styles.container}>

            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/user.png')} style={{ width: 35, height: 35 }} />
                    <Text style={{ marginLeft: 10, fontFamily: "Lato-Regular", fontSize: 16 }}>Jane Doe</Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <TextInput style={{ fontSize: 20, width: '100%' }} placeholderTextColor={'#323232'} placeholder={'Whats going on ?'} />
                </View>

                <View style={{ width: '100%' }}>
                    <TextInput
                        style={{ fontSize: 15, color: '#575757', fontFamily: 'Lato-Regular' }}
                        placeholderTextColor={'#323232'} multiline
                        placeholder={'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
                </View>

                <View style={{
                    marginVertical: 10,
                    justifyContent: 'flex-end', borderBottomWidth: .5, flexDirection: "row", alignItems: 'flex-end'
                }}>
                    <View style={{ padding: 10 }}>
                        <Icon name={'logo-youtube'} size={20} color={'red'} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Icon name={'videocam-outline'} size={20} color={colors.primary} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Image source={require('../../assets/photo.png')} style={{ width: 18, height: 18 }} />
                    </View>
                </View>


                <TouchableOpacity onPress={getDrawer} style={{ marginVertical: 10, alignItems: "center", borderBottomWidth: .5, height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/photo.png')} style={{ width: 18, height: 18 }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, fontFamily: 'Lato-Regular' }}>All Categories</Text>
                    </View>
                    <Icon name={'chevron-down-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>



            </View>

            <View style={styles.bottomView}>
                <View style={{
                    marginVertical: 20,
                    backgroundColor: colors.primary,
                    width: 300,
                    height: 55,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15
                }}>
                    <Text style={{color:'#fff',fontSize:18,fontFamily:'Lato-Bold'}}>Post Now</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50
    },
    textInput: {
        width: 220,
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    bottomView: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },

});

export default UserForm
