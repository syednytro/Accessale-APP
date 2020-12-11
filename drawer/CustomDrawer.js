import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, TouchableWithoutFeedback, TouchableOpacity, Linking, Switch, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import { colors } from '../theme/theme'

const windowHeight = Dimensions.get('window').height;

const CustomDrawer = (props) => {

    console.log(props)

    useEffect(() => {
        console.log('drawerrr')
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} />
            <View style={{
                height: '88%', borderTopEndRadius: 30,
                borderBottomRightRadius: 30, backgroundColor: "#fff", paddin: 10
            }}>

                <View style={{ marginVertical: 20 }}>
                    <View style={{
                        justifyContent: 'space-between', alignItems: 'center',
                        flexDirection: 'row', marginHorizontal: 20
                    }}>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Categories</Text>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>All</Text>
                    </View>
                </View>

                <TouchableOpacity  style={{ margin:15,justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Payment Screen</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </TouchableOpacity>

                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Activities & Groups</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>

                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Artists & Musicians</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>

                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Classes & Lessons</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>

                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Events</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>

                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Friendship & Networking</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>

                
                <View style={{margin:15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                 marginHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Sports Teams</Text>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
                </View>
                

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerlink: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    sidebartext: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
    },

    headername: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
    },
    drawerIcon: {
        width: 65,
        height: 65,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    useremail: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#fff'
    },
    drawer: {
        padding: 10,
        backgroundColor: colors.primary,
        flexDirection: 'row',
    },
    drawerItem: {
        padding: 5,
        marginLeft: 10
    },
    drawerLabel: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16

    }
});

export default CustomDrawer;
